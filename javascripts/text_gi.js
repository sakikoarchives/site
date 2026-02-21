$(function () {

    var imgpre = $('#IMGPRE').val()
    document.title = computer_.MiscText.PAGE_TITLE[lang]

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.Title[lang] + "<color style='font-size: 26px;'><br>" + (lang == "CH" ? '原神 <b>' : 'Genshin Impact <b>') + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
    $('h3 .tlsub').hide()
    $('h3 .links').render([
        {
            img: imgpre + 'images/menu.png',
            class: '_menu_'
        },
        {
            img: imgpre + 'images/translate.png',
            class: '_translate_'
        }
    ]);

    $("body").on("click", ".tlsub", function () {
        if (lang == 'CH') $("a[data-id='EN']").click()
        if (lang == 'EN') $("a[data-id='CN']").click()
    });

    _DATA = []
    loading = 1

    begin()

    function begin() {

        _title = (lang == 'CH') ? '原神 文本搜索' : 'GI Text Search'
        _button = (lang == 'CH') ? '搜索' : 'Search'
        _hits = (lang == 'CH') ? '找到 # 条文本' : 'Found # results'
        _hits_initial = (lang == 'CH') ? '加载中...' : 'Loading data...'
        _hits_finish = (lang == 'CH') ? '加载完成' : 'Loading finished'

        $('container').render({
            div: [
                {
                    p: _title,
                    class: 'ttl',
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'padding-top': '15px',
                        'margin-bottom': '15px',
                    }
                },
                {
                    div: [
                        {
                            input: '',
                            a: {
                                type: 'text',
                                id: 'INPUT'
                            },
                        },
                        {
                            span: {
                                span: _button
                            },
                            class: 'but'
                        }
                    ],
                    class: 'input_wrap'
                },
                {
                    p: _hits_initial,
                    class: 'hits'
                },
                {
                    div: '',
                    class: 'results'
                }
            ],
            class: 'content'
        })

        $('body').addClass(bg_name)

        fetch('/TextMap/GI.json')
            .then(x => x.json())
            .then(y => {
                _DATA = y
                loading = 0
                $('.hits').html(_hits_finish)
            })

    }

    $('body').on('click', '.but', function () {
        if (loading) return
        $('.results').empty()
        var hits = 0
        var s = $('#INPUT').val()
        if (!s) return
        for (const dat of _DATA) {
            var a = (dat.H && dat.H.toString().includes(s))
            var b = (dat.C && dat.C.includes(s))
            var c = (dat.E && dat.E.includes(s))
            if (a || b || c) {
                show(dat)
                hits++
            }
        }
        shownumber(hits)
    })

    function show(d) {
        $('.results').render({
            div: [
                {
                    p: d.H.toString(),
                },
                {
                    p: text(d.C).replaceAll('\\n', '<br>'),
                },
                {
                    p: text(d.E).replaceAll('\\n', '<br>'),
                }
            ],
            class: 'result_single'
        })
    }

    function text(t) {
        if (!t) return ''
        var temp = t
        while (temp.includes('<color=')) {
            var start = temp.indexOf('<color=')
            var end = temp.indexOf('>', start)
            var color = temp.substring(start + 7, end)
            if (color == "#FFFFFFFF") temp = temp.replaceAll(temp.substring(start, end + 1), `<color style='color:${color};background-color:#27363E'>`)
            else temp = temp.replaceAll(temp.substring(start, end + 1), `<color style='color:${color}'>`)
        }
        return temp
    }

    function shownumber(n) {
        $('.hits').html(_hits.replace("#", n.toString()))
    }

})