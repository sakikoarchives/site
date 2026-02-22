$(function () {

    var imgpre = $('#IMGPRE').val()
    init_title((lang == 'CH' ? '地理志' : 'Geography Codex') + ' ' + computer_.MiscText.PAGE_TITLE[lang])

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + (lang == "CH" ? '原神 <b>' : 'Genshin Impact <b>') + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
    $('h3 .tlsub').hide()


    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/codex.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        cur_path = _codex.length

        $('container').render({
            template: {
                div: [
                    {
                        section: {
                            schedule: {
                                img: function (k) {
                                    return imgpre + `images/Cities/` + k.data.ID + '.png'
                                }
                            },
                            data: _codex,
                            event: {
                                click: function (d) {
                                    if ($(d.sender).hasClass('active')) {
                                        return;
                                    }
                                    $(d.sender).addClass('active').siblings('schedule').removeClass('active');
                                    cur_path = d.org_data.ID
                                    blessingRender();
                                }
                            }
                        },
                        class: 'path'
                    },
                    {
                        div: [],
                        class: 'blessing_card_area'
                    }
                ],
                class: 'content'
            }
        })

        $('.path schedule:last-child').addClass('active')
        blessingRender()

        $('body').addClass(bg_name)
    }

    function blessingRender () {
        $('.blessing_card_area').empty()
        _codex[cur_path - 1].Codex.forEach(function (t, i) {
            $('.blessing_card_area').render({
                div: [
                    {
                        img: imgpre + `images/Cities/${t.Image}.png`,
                        class: 'image'
                    },
                    {
                        p: t.Name,
                        class: 'name'
                    },
                    {
                        p: t.Desc,
                        class: 'desc'
                    }
                ],
                class: 'card'
            })
        })
    }

})