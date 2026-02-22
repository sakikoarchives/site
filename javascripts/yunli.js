$(function () {

    var imgpre = $('#IMGPRE').val()
    var avid = $('#AVID').val()

    init_title((lang == 'CH' ? '云璃成绩' : 'Yunli Endgame') + ' ' + txt.PAGE_TITLE[lang])

    if (lang == 'EN') { $('body').css('font-family', "'Segoe UI', sans-serif") }
    else { $('body').css('font-family', "'Microsoft YaHei', sans-serif") }

    $('h3 .title').html(txt.Title[lang] + "<color style='font-size: 26px;'><br>" + (lang == "CH" ? '崩坏星穹铁道 <b>' : 'Honkai Star Rail <b>') + VER_SR + "</b></color>")
    $('h3 .subtitle').html(txt.Subtitle[lang]);
    $('h3 .lang').html(txt.Home_Lang)
    $('h3 .lang').hide()
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

    $('body').on('click', '._menu_', function () {
        
    })

    var tip = {
        CH: "云璃在一些赛道的成绩汇总（个人厨力向）<br>表格最右侧是每个视频的作者，手机上需要左划",
        EN: "Compilation of Yunli's performance in endgame content, out of personal interest.<br>If on mobile, swipe left to view the full tables.",
    }

    var template = [
        [
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '30%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '30%'
            }
        ],
        [
            {
                CH: '金数',
                EN: '5⭐',
                width: '14%'
            },
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '23%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '23%'
            }
        ],
        [
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '30%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '30%'
            }
        ],
        [
            {
                CH: '分数',
                EN: 'Score',
                width: '14%'
            },
            {
                CH: '阵容',
                EN: 'Team',
                width: '40%'
            },
            {
                CH: '视频',
                EN: 'Video',
                width: '23%'
            },
            {
                CH: '作者',
                EN: 'By',
                width: '23%'
            }
        ],
    ]

    $('container').render({
        template: {
            div: [
                {
                    p: (lang == "CH" ? '云璃成绩' : 'Yunli Endgame'),
                    class: 'sch_2'
                },
                {
                    p: tip[lang],
                    class: 'avd tip2',
                    style: {
                        margin: '18px 8px 14px',
                        'font-weight': 'normal',
                        'text-align': 'center',
                        'line-height': '1.7'
                    }
                },
                {
                    p: txt.Chart_Subtitle[lang],
                    class: 'avd avd_1',
                    style: {
                        'color': '#0066FF',
                        'font-weight': 'bold',
                        'text-align': 'center',
                        'margin-bottom': '13px',
                        'margin-top': '13px'
                    }
                },
                {
                    div: [
                        {
                            div: [
                                {
                                    p: (lang == 'CH') ? '混沌回忆 双人0轮' : 'MoC Duo 0 Cycle',
                                    class: 'name'
                                },
                                {
                                    p: '＋',
                                    class: 'show toggle'
                                },
                                {
                                    p: '−',
                                    class: 'hide toggle'
                                },
                                {
                                    div: rnd(_chaos_duo, 'chaos', template[0]),
                                    class: 'card_content hide'
                                }
                            ],
                            class: 'card card_1',
                            when: !avid || avid == '1'
                        },
                        {
                            div: [
                                {
                                    p: (lang == 'CH') ? '混沌回忆 低金0轮' : 'MoC Low Cost 0 Cycle',
                                    class: 'name'
                                },
                                {
                                    p: '＋',
                                    class: 'show toggle'
                                },
                                {
                                    p: '−',
                                    class: 'hide toggle'
                                },
                                {
                                    div: rnd(_chaos_low, 'chaos', template[1]),
                                    class: 'card_content hide'
                                }
                            ],
                            class: 'card card_2',
                            when: !avid || avid == '2'
                        },
                        {
                            div: [
                                {
                                    p: (lang == 'CH') ? '混沌回忆 0行动值' : 'MoC 0 Action Value',
                                    class: 'name'
                                },
                                {
                                    p: '＋',
                                    class: 'show toggle'
                                },
                                {
                                    p: '−',
                                    class: 'hide toggle'
                                },
                                {
                                    div: rnd(_pf, 'chaos', template[2]),
                                    class: 'card_content hide'
                                }
                            ],
                            class: 'card card_1',
                            when: !avid || avid == '3'
                        },
                        {
                            div: [
                                {
                                    p: (lang == 'CH') ? '末日幻影' : 'Apocalyptic Shadow',
                                    class: 'name'
                                },
                                {
                                    p: '＋',
                                    class: 'show toggle'
                                },
                                {
                                    p: '−',
                                    class: 'hide toggle'
                                },
                                {
                                    div: rnd(_as, 'shadow', template[3]),
                                    class: 'card_content hide'
                                }
                            ],
                            class: 'card card_3',
                            when: !avid || avid == '4'
                        },
                    ],
                    class: 'blessing_card_area'
                }
            ],
            class: 'content'
        }
    })

    if (!avid) $('.hide').hide()
    if (avid) $('.show').hide()
    $('body').on('click', '.toggle', function () {
        $(this).toggle()
        $(this).siblings('.show').toggle()
        $(this).siblings('.hide').toggle()
    })

    $('body').addClass(bg_name)

    console.log("FINISH")

    function rnd(data_0, lk, tpl) {
        if (!avid) {
            var data = data_0
        }
        else {
            var data = data_0.slice(-2)
        }
        var out = []
        for (const ind in data) {
            var phase_data = data[data.length - ind - 1]
            if (phase_data.Upper && phase_data.Upper.length) {
                out.push({
                    div: divs(phase_data, 'Upper', lk, tpl)
                })
            }
            if (phase_data.Lower && phase_data.Lower.length) {
                out.push({
                    div: divs(phase_data, 'Lower', lk, tpl)
                })
            }
        }
        return out
    }

    function divs(phase_data, half, lk, tpl) {
        var title = {
            Upper: {
                CH: ' 上半',
                EN: ' First Half'
            },
            Lower: {
                CH: ' 下半',
                EN: ' Second Half'
            }
        }
        var entries = phase_data[half]
        var boss = _monsters[phase_data._id] ? _monsters[phase_data._id][half] : []
        if (!boss) boss = []
        var elems = _monsters[phase_data._id] ? _monsters[phase_data._id]['Elem' + half] : []
        if (!elems) elems = []
        var images = []
        boss.forEach(function (t) {
            images.push({
                img: '/images/' + t,
                class: 'boss_img'
            })
        })
        var elements = []
        elems.forEach(function (t) {
            elements.push({
                img: '/images/Element/' + t + '.png',
                class: 'elem'
            })
        })
        var firstrow = []
        tpl.forEach(function (t) {
            firstrow.push({
                th: t[lang],
                style: {
                    width: t.width
                }
            })
        })
        var tbl = [
            {
                tr: firstrow
            }
        ]
        entries.forEach(function (t) {
            var chars = []
            t.Char.forEach(function (u) {
                chars.push({
                    a: `/sr/char/${u}`,
                    t: {
                        img: `/images/avataricon/avatar/${u}.png`,
                        style: {
                            width: '100%'
                        }
                    },
                    class: 'avatar_img hover-shadow',
                    attr: {
                        target: '_blank',
                    }
                })
            })
            tbl.push({
                tr: [
                    {
                        td: (t.Score ? t.Score.toString() : '').replaceAll('+', "<color style='color:#eee'>+</color>"),
                        when: t.Score != undefined,
                        style: {
                            'text-align': 'center',
                            color: '#f29e38',
                            'font-weight': 'bold',
                            'font-size': '1.3em'
                        }
                    },
                    {
                        td: [
                            {
                                div: chars,
                                class: 'avatar_img_wrap'
                            },
                            {
                                p: t.Note,
                                when: t.Note && t.Note.length,
                                style: {
                                    'text-align': 'center',
                                    margin: '10px 0 10px',
                                    'font-weight': 'bold',
                                    color: 'rgb(153, 255, 255)'
                                }
                            }
                        ],
                    },
                    {
                        td: {
                            a: `https://bilibili.com/video/${t.Vid}`,
                            t: {
                                span: '<u>' + t.Vid + '</u>',
                                style: {
                                    'color': '#eee'
                                }
                            },
                            attr: {
                                target: '_blank',
                                class: 'hover-shadow'
                            }
                        },
                        style: {
                            'text-align': 'center'
                        }
                    },
                    {
                        td: t.Authors.join('<br>'),
                        style: {
                            'text-align': 'center'
                        }
                    }
                ]
            })
        })
        var out = [
            {   
                a: `/sr/${lk}/${phase_data._id}`,
                t: [
                    {
                        p: phase_data.Ver + title[half][lang],
                        class: 'ver_text',
                    },
                    {
                        div: images,
                        class: 'boss_img_wrap'
                    },
                    {
                        div: elements,
                        class: 'elem_img_wrap'
                    }
                ],
                class: 'top_wrap hover-shadow',
                attr: {
                    target: '_blank',
                }
            },
            {
                div: {
                    table: tbl,
                    class: 'table'
                },
                class: 'table_wrap'
            }
        ]
        return out
    }

})