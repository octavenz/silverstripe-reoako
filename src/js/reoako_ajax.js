(function ($) {
    $(window).on('keyup', '.js-ajax-form', function (e) {
        var $form = $(this);
        var formData = $form.serialize();
        var formAction = $form.prop('action');
        var formMethod = $form.prop('method');
        var encType = $form.prop('enctype');

        $.ajax({
            beforeSend: function (jqXHR, settings) {
                if ($form.prop('isSending')) {
                    return false;
                }
                $form.prop('isSending', true);
            },
            complete: function (jqXHR, textStatus) {
                $form.prop('isSending', false);
            },
            contentType: encType,
            data: formData,
            error: function (jqXHR, textStatus, errorThrown) {
                window.location = window.location;
            },
            success: function (data, textStatus, jqXHR) {
                var $holder = $form.parent();
                $holder.fadeOut('normal', function () {
                    $holder.html(data).fadeIn();
                });
            },
            type: formMethod,
            url: formAction
        });
        e.preventDefault();
    });
})(jQuery);
