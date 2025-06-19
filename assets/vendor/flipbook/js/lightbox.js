// Lightbox Effect

(function ($) {
  var fb3d = {
    activeModal: undefined,
    capturedElement: undefined,
  };

  $(
    [
      '<div class="fb3d-modal">',
      '<a href="#" class="cmd-close"><span class="fa fa-times"></span></a>',
      '<div class="mount-container">',

      '</div>',
      '</div>',
    ].join(''),
  ).appendTo('body');

  var styleClb = function () {
      $('.fb3d-modal').removeClass('light').addClass('dark');
    },
    booksOptions = {
      book1: {
        pdf: 'assets/doc/266.pdf',
        template: {
          html: 'assets/vendor/flipbook/templates/default-book-view.html',
          styles: ['assets/vendor/flipbook/css/short-white-book-view.css'],
          links: [
            {
              rel: 'stylesheet',
              href: 'assets/vendor/flipbook/css/font-awesome.min.css',
            },
          ],
          script: 'assets/vendor/flipbook/js/default-book-view.js',
          sounds: {
            startFlip: 'assets/vendor/flipbook/sounds/start-flip.mp3',
            endFlip: 'assets/vendor/flipbook/sounds/end-flip.mp3',
          },
        },
        styleClb: styleClb,
      },
    };

  var instance = {
    scene: undefined,
    options: undefined,
    node: $('.fb3d-modal .mount-container'),
  };

  var modal = $('.fb3d-modal');
  modal.on('fb3d.modal.hide', function () {
    instance.scene.dispose();
  });
  modal.on('fb3d.modal.show', function () {
    instance.scene = instance.node.FlipBook(instance.options);
    instance.options.styleClb();
  });
  $('.books')
    .find('.thumbnail')
    .click(function (e) {
      var target = $(e.target);
      while (target[0] && !target.attr('data-book-id')) {
        target = $(target[0].parentNode);
      }
      if (target[0]) {
        instance.options = booksOptions[target.attr('data-book-id')];
        $('.fb3d-modal').fb3dModal('show');
      }
    });

  (function () {
    function findParent(parent, node) {
      while (parent && parent != node) {
        parent = parent.parentNode;
      }
      return parent;
    }
    $('body').on('mousedown', function (e) {
      fb3d.capturedElement = e.target;
    });
    $('body').on('click', function (e) {
      if (fb3d.activeModal && fb3d.capturedElement === e.target) {
        if (
          !findParent(e.target, fb3d.activeModal[0]) ||
          findParent(e.target, fb3d.activeModal.find('.cmd-close')[0])
        ) {
          e.preventDefault();
          fb3d.activeModal.fb3dModal('hide');
        }
      }
      delete fb3d.capturedElement;
    });
  })();

  $.fn.fb3dModal = function (cmd) {
    setTimeout(
      function () {
        function fb3dModalShow() {
          if (!this.hasClass('visible')) {
            $('body').addClass('fb3d-modal-shadow');
            this.addClass('visible');
            fb3d.activeModal = this;
            this.trigger('fb3d.modal.show');
          }
        }
        function fb3dModalHide() {
          if (this.hasClass('visible')) {
            $('body').removeClass('fb3d-modal-shadow');
            this.removeClass('visible');
            fb3d.activeModal = undefined;
            this.trigger('fb3d.modal.hide');
          }
        }
        var mdls = this.filter('.fb3d-modal');
        switch (cmd) {
          case 'show':
            fb3dModalShow.call(mdls);
            break;
          case 'hide':
            fb3dModalHide.call(mdls);
            break;
        }
      }.bind(this),
      50,
    );
  };
})(window.jQuery);
