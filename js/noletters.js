$(function() {

    $("input.number-only").bind({
        keydown: function(e) {
            if (e.shiftKey === true ) {
                if (e.which == 9) {
                    return true;
                }
                return false;
            }
            if (e.which > 57) {
                return false;
            }
            if (e.which==32) {
                return false;
            }
            return true;
        }
    });

});