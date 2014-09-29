$(document).ready(function () {
    $('#item-manage-list').on('click', 'button', function () {
        var item_name = $(this).closest('tr').children().first().next().text();
        var operation = { '+': 'add', '-': 'minus'}[$(this).text()];
        var number = $(this).closest('.btn-group').find('.item-count');
        var count = parseInt(number.val());
        if (operation == 'add') {
            number.val(count + 1);
        }
        else if (count > 0) {
            number.val(count - 1);
        }
        else {
            return;
        }
        $.post('/admin/alter_count', { name: item_name, count: count });
    });
});
