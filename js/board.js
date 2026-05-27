$(function () {
    $('body').on('click', '#overlay_popup .btn-confirm', function () {
        if ($('#overlay_popup [name=mh_passwd]').val() == '') {
            alert('비밀번호를 입력해주세요.');
            return false;
        }
        if ($('#overlay_popup [name=mode]').val() == 'delete' && confirm('게시글을 삭제하시겠습니까?') === false) {
            return false;
        }
        $('#overlay_popup form').submit();
        $('#overlay').fadeOut();
        $('#overlay_popup').fadeOut();
    });

    $('body').on('click', '#overlay_popup .btn-cancel', function () {
        $('#overlay').fadeOut();
        $('#overlay_popup').fadeOut();
    });

    $('#fwrite_comment .btn-save').on('click', function (e) {
        e.preventDefault();

        let $frm = $('#fwrite_comment');
        if ($.trim($('[name=mh_name]', $frm).val()) == '') {
            alert('작성자 이름을 입력해주세요.');
            $('[name=mh_name]', $this).focus();
            return false;
        }

        if ($.trim($('[name=mh_passwd]', $frm).val()) == '') {
            alert('비밀번호를 입력해주세요.');
            $('[name=mh_passwd]', $this).focus();
            return false;
        }

        if ($.trim($('[name=mh_desc]', $frm).val()) == '') {
            alert('내용을 입력해주세요.');
            $('[name=mh_desc]', $this).focus();
            return false;
        }

        $frm.submit();
        return false;
    });
    
    $('#fwrite [name="mh_file[]"]').on("change", function (e) {
        let files = e.currentTarget.files;
        if (files[0].size >= 10485760) {
            alert('최대 업로드 가능한 용량은 10Mb 입니다.');
            $(this).val('');
            return false;
        }
    });
});
function pop_passwd(mode, id, redirect) {
    let _html = [];
    _html.push('<div id="overlay"></div>');
    _html.push('<div id="overlay_popup">');
    _html.push('<ul class="popup_head">');
    _html.push('<h2 class="title">비밀번호 확인</h2>');
    _html.push('</ul>');
    _html.push('<div class="popup_body">');
    if (mode == 'modify') {
        _html.push('<form name="frm_confirm" method="post" action="' + redirect + '">');
    } else {
        _html.push('<form name="frm_confirm" method="post">');
        _html.push('<input type="hidden" name="redirect" value="' + redirect + '"/>');
    }
    _html.push('<input type="hidden" name="mode" value="' + mode + '"/>');
    _html.push('<input type="hidden" name="id" value="' + id + '"/>');
    _html.push('<div class="input-wrap"><input type="password" name="mh_passwd" value="" class="input-passwd" placeholder="비밀번호를 입력해주세요."/></div>');
    _html.push('<div class="btn-wrap">');
    _html.push('<button type="button" name="confirm" class="btn btn-confirm">확인</button>');
    _html.push('<button type="button" name="cancel" class="btn btn-cancel">취소</button>');
    _html.push('</div>');
    _html.push('</form>');
    _html.push('</div>');
    _html.push('</div>');
    $('#overlay').remove();
    $('#overlay_popup').remove();
    $('body').append(_html.join('\n'));
    $('#overlay_popup [name=mh_passwd]').focus();
    return false;
}







