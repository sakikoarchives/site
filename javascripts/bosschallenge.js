$(function () {

    var download_cd = 0
    var unreleased = 0
    var screenshot_disable_tips = 0

    // Texts
    var coming_soon = {
        CH: '敬请期待',
        EN: 'Coming Soon'
    }
    var switch_button = {
        CH: '切换文案',
        EN: 'Switch Description'
    }
    var download_text = {
        CH: '下载图片',
        EN: 'Download Image'
    }
    var browser_title_name = {
        CH: '幽境危战',
        EN: 'Stygian Onslaught'
    }
    var content_title_name = {
        CH: '幽境危战',
        EN: 'Stygian Onslaught'
    }
    var content_subtitle_name = {
        CH: '首领三连挑战',
        EN: '3 Boss Challenge'
    }
    var overall_name = {
        CH: '难度',
        EN: 'Difficulty Levels'
    }
    var overall_desc = {
        CH: '在@「幽境危战」#中，需要组成三个队伍击败三名首领<br>难度等级：@1~6# ，每个等级的首领均相同<br>完成难度 1~3 即可获得全部原石奖励，难度 4~6 的敌人会@大幅增强#，且拥有@新机制#',
        EN: 'In @Stygian Onslaught#, you need to form 3 teams and defeat 3 Bosses.<br>Difficulty Levels: @1~6#. The Bosses are the same for each Level.<br>You can get all the Primogems by completing Levels 1~3. The Bosses in Levels 4~6 are @significantly more powerful# and have @extra features#.'
    }
    var reward_name = {
        CH: '奖励',
        EN: 'Rewards'
    }
    var team_name = {
        CH: '队伍、限时',
        EN: 'Teams & Time Limit'
    }
    var team_desc = {
        CH: '<b>@难度 1~3#</b> 每首领 @10min#，可以重复使用角色，可匹配联机<br><b>@难度 4~5# </b>每首领 @120s#，不可重复使用角色<br><b>@难度 6# </b>每首领 @120s#，若用时之和在 @180s# 内，获得更高级奖励',
        EN: '<b>@Levels 1~3# </b> Each Boss @10min#. You can use a character more than once, and you can Co-Op by Matching.<br><b>@Levels 4~5# </b>Each Boss @120s#. You cannot use a character more than once.<br><b>@Level 6# </b>Each Boss @120s#. If total time is below @180s#, you get a better reward.'
    }
    var r1_name = {
        CH: '圣遗物奖励',
        EN: 'Artifact Rewards'
    }
    var r1_desc = {
        CH: '可以@选择一座祝圣秘境#，通过以下方式获得其中的圣遗物奖励：<br>• 完成难度 @3# 或以上的挑战后，可以消耗树脂获得一次奖励<br>• 每版本有 10 天@爆发期#，可以额外消耗 20/40/60 树脂，获得 1/2/3 份奖励<br>通过第二种方式累计消耗 @120# 树脂，可以额外获得一件五星圣遗物，累计消耗 @1200# 树脂，可以获得一份@圣遗物重掷#材料',
        EN: 'You can @choose an Artifact Domain# and claim rewards from it via the following methods:<br>• After completing Level @3# or above, use Resin to claim reward once.<br>• Every phase there is a 10 day @Burst Period#, when you can spend an extra 20/40/60 Resin to claim 1/2/3 rewards.<br>For every @120# Resin spent via the 2nd method, you obtain 1 extra 5-star artifact, and after spending @1200# Resin, you will get an @Artifact Reroll# material.'
    }

    var rewards = [
        {
            P: "1",
            R: "UI_ItemIcon_201",
            C: 150
        },
        {
            P: "2",
            R: "UI_ItemIcon_201",
            C: 150
        },
        {
            P: "3",
            R: "UI_ItemIcon_201",
            C: 150
        },
        {
            P: "4",
            D: {
                CH: "圣遗物<br>重掷",
                EN: "Artifact<br>Reroll"
            }
        },
        {
            P: "5",
            D: {
                CH: "圣遗物<br>重掷",
                EN: "Artifact<br>Reroll"
            }
        },
        {
            P: "6",
            D: {
                CH: "武器<br>幻化",
                EN: "Weapon<br>Skin"
            }
        },
    ]

    var time = [
        "",
        "10min",
        "10min",
        "Lv90 10min",
        "Lv100 120s",
        "Lv105 120s",
        (lang == 'CH') ? 'Lv110 共享 180s' : 'Lv110 Share 180s',
        "",
    ]

    function process(text) {
        return text.replaceAll("#", "</color>").replaceAll("@", `<color style="color:#FFD780">`)
    }

    function process_2(text) {
        return text.replaceAll("#", "</color>").replaceAll("@", `<color style="color:#FFD780">`)
    }

    var imgpre = $('#IMGPRE').val()
    var lazy = $('#NOLAZY').val() ? '' : 'lazy'
    var avid = $('#AVID').val()
    init_title(browser_title_name[lang] + ' ' + computer_.MiscText.PAGE_TITLE[lang])

    $('.tls' + lang).css("color", "#df903b");
    $('h3 .title').html(computer_.MiscText.TITLE[lang] + "<color style='font-size: 26px;'><br>" + (lang == "CH" ? '原神 <b>' : 'Genshin Impact <b>') + VER_GI + "</b></color>");
    $('h3 .subtitle').html(computer_.MiscText.Subtitle[lang]);
    $('h3 .tlsub').html(computer_.MiscText.Translate_);
    $('h3 .tlsub').hide()


    let script_computer = document.createElement('script')
    script_computer.src = '/gi/' + lang3 + '/bosschallenge.js'
    document.head.append(script_computer)
    script_computer.onload = begin

    function begin() {

        if (unreleased) {
            $('container').render({
                template: {
                    div: [
                        {
                            p: coming_soon[lang],
                            style: {
                                'text-align': 'center',
                                'font-weight': 'bold',
                                'margin-bottom': '10px',
                            },
                            class: 'sch_2'
                        },
                        {
                            p: computer_.MiscText.Abyss_Reminder[lang],
                            class: 'avd tip_3',
                            style: {
                                'color': '#6f6f6f',
                                'font-weight': 'bold',
                                'text-align': 'center',
                                'margin-bottom': '13px'
                            }
                        },
                    ],
                    class: 'content'
                }
            })
            $('body').addClass(bg_name)
            return
        }

        cur_phase = -1
        phase_num = BossChallenge_Schedule.length

        cur_level = -1
        
        if (avid) {
            for (const i in BossChallenge_Schedule) {
                if (BossChallenge_Schedule[i].Name == avid.replaceAll('_', '.')) cur_phase = i
            }
        }

        $('container').render({
            template: {
                div: [
                    {
                        p: content_title_name[lang3],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'margin-bottom': '10px',
                        },
                        class: 'sch_2'
                    },
                    {
                        p: content_subtitle_name[lang3],
                        style: {
                            'text-align': 'center',
                            'margin-bottom': '10px',
                            'font-size': '1.1em'
                        },
                        class: 'sch_2'
                    },
                    {
                        p: computer_.MiscText.Abyss_Reminder[lang],
                        class: 'avd tip_3',
                        style: {
                            'color': '#6f6f6f',
                            'font-weight': 'bold',
                            'text-align': 'center',
                            'margin-bottom': '13px'
                        }
                    },
                    {
                        div: [
                            {
                                div: [],
                                class: 'card_2'
                            },
                            {
                                div: [
                                    {
                                        div: team_name[lang],
                                        class: 'name'
                                    },
                                    {
                                        div: process_2(team_desc[lang]),
                                        class: 'desc'
                                    }
                                ],
                                class: 'card',
                                when: !screenshot_disable_tips 
                            },
                            {
                                div: [
                                    {
                                        div: reward_name[lang],
                                        class: 'name'
                                    },
                                    {
                                        div: function (d) {
                                            rewards.forEach(function (t) {
                                                if (t.R) {
                                                    $(d.container).render({
                                                        div: [
                                                            {
                                                                p: t.P
                                                            },
                                                            {
                                                                img: '/homdgcat-res/Mat/' + t.R + '.png',
                                                            },
                                                            {
                                                                p: t.C.toString(),
                                                                style: {
                                                                    'font-size': '0.9em',
                                                                    'margin-top': '-10px'
                                                                }
                                                            }
                                                        ],
                                                        class: 'item_wrap'
                                                    })
                                                }
                                                if (t.D) {
                                                    $(d.container).render({
                                                        div: [
                                                            {
                                                                p: t.P
                                                            },
                                                            {
                                                                p: t.D[lang],
                                                                style: {
                                                                    'font-size': '0.9em'
                                                                }
                                                            }
                                                        ],
                                                        class: 'item_wrap'
                                                    })
                                                }
                                            })
                                        },
                                        class: 'desc',
                                        style: {
                                            display: 'flex',
                                            'justify-content': 'center'
                                        }
                                    }
                                ],
                                class: 'card',
                                when: !screenshot_disable_tips 
                            },
                            {
                                div: [
                                    {
                                        div: r1_name[lang],
                                        class: 'name'
                                    },
                                    {
                                        div: process_2(r1_desc[lang]),
                                        class: 'desc'
                                    }
                                ],
                                class: 'card',
                                when: !screenshot_disable_tips 
                            },
                            {
                                div: [
                                    {
                                        div: overall_name[lang],
                                        class: 'name'
                                    },
                                    {
                                        div: process_2(overall_desc[lang]),
                                        class: 'desc'
                                    }
                                ],
                                class: 'card',
                                when: !screenshot_disable_tips 
                            },
                        ],
                        class: 'blessing_card_area'
                    },
                ],
                class: 'content'
            }
        })

        renderOverall()

        $('body').addClass(bg_name)

        if (!lazy) a_section_white()

    }

    function renderOverall() {

        var phase_data = BossChallenge_Schedule[mod(cur_phase, phase_num)]
        switch_title(phase_data.Ver)

        if (phase_data.Show) {
            $('.card_2').empty().render({
                template: [
                    {
                        p: [
                            {
                                span: '◁',
                                class: 'v_l'
                            },
                            phase_data.Ver,
                            {
                                span: '▷',
                                class: 'v_r'
                            }
                        ],
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'font-size': '1.7em',
                            'margin-top': '17px',
                            'margin-bottom': '10px',
                        },
                        class: 'nosel'
                    },
                    {
                        p: phase_data.Time,
                        style: {
                            'text-align': 'center',
                            'font-weight': 'bold',
                            'font-size': '1em',
                            'margin-top': '7px',
                            'margin-bottom': '7px',
                        },
                        class: 'nosel'
                    },
                    {
                        div: {
                            span: download_text[lang],
                            style: {
                                padding: '5px 10px',
                                border: '2px solid #f29e38',
                                'border-radius': '5px'
                            },
                            class: 'hover-shadow',
                            click: function () {
                                download(`/Abyss/${lang}/-${phase_data.Ver}.png`, `${phase_data.Ver} ${content_title_name[lang]}`)
                            }
                        },
                        style: {
                            width: '100%',
                            display: 'flex',
                            'justify-content': 'center',
                            'font-weight': 'bold',
                            'margin-top': '20px',
                            'margin-bottom': '5px',
                        },
                        class: 'pic_dl',
                    },
                    {
                        div: function (d) {
                            phase_data.Monsters.forEach(function (t, i) {
                                var mon_tutorial = []
                                if (t.DescList && t.DescList.length) {
                                    for (const buff of t.DescList) {
                                        mon_tutorial.push({
                                            p: process(buff),
                                            class: 'mon_buff_bigger'
                                        })
                                    }
                                }
                                var middle_style = {}
                                if (i == 1) {
                                    if (window.innerWidth >= 1000) {
                                        middle_style = {
                                            'border-left': '1px solid #eeeeee',
                                            'border-right': '1px solid #eeeeee'
                                        }
                                    }
                                }
                                $(d.container).render({
                                    template: {
                                        div: [
                                            {   
                                                div: {
                                                    div: {
                                                        img: '/homdgcat-res/monster/' + t.Icon + '.png',
                                                        event: {
                                                            error: function (o) {
                                                                $(o.sender).hide()
                                                                $(o.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                            }
                                                        },
                                                        class: 'hover-shadow',
                                                        a: {
                                                            loading: lazy
                                                        }
                                                    }
                                                },
                                                class: 'mon_head',
                                            },
                                            {
                                                div: mon_tutorial,
                                                class: 'mon_buffs sw_' + (i + 1) + '_2',
                                            },
                                        ],
                                        class: 'mon_sing',
                                        style: middle_style
                                    }
                                })
                            })
                        },
                        class: 'mons_place',
                    }
                ]
            })
            return
        }

        var level_data = phase_data.Levels[mod(cur_level, phase_data.Levels.length)]

        $('.card_2').empty().render({
            template: [
                {
                    p: [
                        {
                            span: '◁',
                            class: 'v_l'
                        },
                        phase_data.Ver,
                        {
                            span: '▷',
                            class: 'v_r'
                        }
                    ],
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'font-size': '1.7em',
                        'margin-top': '17px',
                        'margin-bottom': '10px',
                    },
                    class: 'nosel'
                },
                {
                    p: phase_data.Time,
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'font-size': '1em',
                        'margin-top': '7px',
                        'margin-bottom': '7px',
                    },
                    class: 'nosel'
                },
                {
                    p: [
                        {
                            span: '◁',
                            class: 'f_l'
                        },
                        ('N' + level_data.Level.toString()).replace('N5', 'N5/6'),
                        {
                            span: '▷',
                            class: 'f_r'
                        }
                    ],
                    style: {
                        'text-align': 'center',
                        'font-weight': 'bold',
                        'font-size': '1.3em',
                        'margin-top': '10px',
                        'margin-bottom': '22px',
                    },
                    class: 'nosel'
                },
                {
                    div: {
                        span: download_text[lang],
                        style: {
                            padding: '5px 10px',
                            border: '2px solid #f29e38',
                            'border-radius': '5px'
                        },
                        class: 'hover-shadow',
                        click: function () {
                            download(`/Abyss/${lang}/-${phase_data.Ver}.png`, `${phase_data.Ver} ${content_title_name[lang]}`)
                        }
                    },
                    style: {
                        width: '100%',
                        display: 'flex',
                        'justify-content': 'center',
                        'font-weight': 'bold',
                        'margin-top': '10px',
                        'margin-bottom': '-5px',
                    },
                    class: 'pic_dl',
                },
                {
                    div: function (d) {
                        level_data.Monsters.forEach(function (t_id, i) {
                            var t = BossChallenge_Monsters[t_id]
                            var has_tutorial = t.Tutorial && t.Tutorial.length
                            var mon_buffs = []
                            if (t.Buff && t.Buff.length) {
                                for (const buff of t.Buff) {
                                    var this_texts = []
                                    if (buff.Name) this_texts.push('<b>' + buff.Name + '</b>')
                                    if (buff.Desc) this_texts.push(buff.Desc)
                                    mon_buffs.push({
                                        p: this_texts.join('<br>'),
                                        class: 'mon_buff'
                                    })
                                }
                            }
                            var mon_tutorial = []
                            if (t.Tutorial && t.Tutorial.length) {
                                mon_tutorial.push({
                                    p: '<b>' + ((lang == 'CH') ? '妮可少女的研究' : "HomDGCat's Notes") + '</b>',
                                    class: 'mon_buff_bigger'
                                })
                                for (const buff of t.Tutorial) {
                                    mon_tutorial.push({
                                        p: process_2(buff),
                                        class: 'mon_buff_bigger'
                                    })
                                }
                            }
                            var middle_style = {}
                            if (i == 1) {
                                if (window.innerWidth >= 1000) {
                                    middle_style = {
                                        'border-left': '1px solid #eeeeee',
                                        'border-right': '1px solid #eeeeee'
                                    }
                                }
                            }
                            $(d.container).render({
                                template: {
                                    div: [
                                        {   
                                            a: '/gi/monster/' + (t.ID ? (t.ID + '?level=105&mul=' + (t.HPMult ? t.HPMult : 1)) : ''),
                                            t: {
                                                div: {
                                                    img: '/homdgcat-res/monster/' + t.Icon + '.png',
                                                    event: {
                                                        error: function (o) {
                                                            $(o.sender).hide()
                                                            $(o.sender).parent().render({ img: '/homdgcat-res/Mat/UI_ItemIcon_120864.png', a: { loading: lazy } })
                                                        }
                                                    },
                                                    class: 'hover-shadow',
                                                    a: {
                                                        loading: lazy
                                                    }
                                                }
                                            },
                                            class: 'mon_head',
                                            attr: {
                                                target: '_blank'
                                            }
                                        },
                                        {
                                            p: t.Name,
                                            class: 'mon_name',
                                            style: {
                                                color: computer_.TextColorLightConfig[t.Color]
                                            },
                                        },
                                        {
                                            div: {
                                                p: function (k) {
                                                    var ret = '<color style="color:#FFD780">' + t.HP + '</color>'
                                                    if ((t.HP_2 != undefined) && (t.HP_2 != 0)) {
                                                        ret += ' / <color style="color:#FFD780">' + t.HP_2 + '</color>'
                                                    }
                                                    return ret
                                                },
                                                class: 'desc_hp',
                                                style: {
                                                    'font-weight': 'bold',
                                                    margin: '3px 0 0',
                                                    'text-align': 'center'
                                                }
                                            },
                                            class: 'mon_hp_div',
                                            when: (t.HP != undefined) && (t.HP != 0)
                                        },
                                        /*{
                                            div: {
                                                p: time[level_data.Level],
                                                class: 'desc',
                                                style: {
                                                    'font-weight': 'bold',
                                                    margin: '3px 0 0',
                                                    'text-align': 'center'
                                                }
                                            },
                                            class: 'mon_hp_div',
                                            when: (time[level_data.Level] != 0)
                                        },*/
                                        {
                                            div: {
                                                div: [
                                                    {
                                                        div: [
                                                            {
                                                                img: `/homdgcat-res/UI/[[.]].png`,
                                                                data: t.Advantage,
                                                                class: 'elem'
                                                            },
                                                            {
                                                                img: `/homdgcat-res/UI/Yes.png`,
                                                                class: 'elem'
                                                            }
                                                        ],
                                                        when: t.Advantage.length,
                                                        style: {
                                                            'display': 'flex',
                                                            margin: '0 8px',
                                                            'justify-content': 'center'
                                                        }
                                                    },
                                                    {
                                                        div: [
                                                            {
                                                                img: `/homdgcat-res/UI/[[.]].png`,
                                                                data: t.Disadvantage,
                                                                class: 'elem'
                                                            },
                                                            {
                                                                img: `/homdgcat-res/UI/No.png`,
                                                                class: 'elem'
                                                            }
                                                        ],
                                                        when: t.Disadvantage.length,
                                                        style: {
                                                            'display': 'flex',
                                                            margin: '0 8px',
                                                            'justify-content': 'center'
                                                        }
                                                    }
                                                ],
                                                style: {
                                                    'display': 'flex',
                                                    margin: '15px 0 0',
                                                    'justify-content': 'center'
                                                }
                                            },
                                            when: t.Advantage.length || t.Disadvantage.length
                                        },
                                        {
                                            p: '＋',
                                            class: `toggle_${(i + 1)} plus`,
                                            a: {
                                                'data-id': i + 1
                                            },
                                            when: window.innerWidth <= 500
                                        },
                                        {
                                            p: '−',
                                            class: `toggle_${(i + 1)} minus`,
                                            a: {
                                                'data-id': i + 1
                                            },
                                            when: window.innerWidth <= 500
                                        },
                                        {
                                            div: mon_tutorial,
                                            class: `toggle_${(i + 1)} mon_buffs sw_${(i + 1)}_2`,
                                            when: has_tutorial
                                        },
                                        {
                                            div: mon_buffs,
                                            class: `toggle_${(i + 1)} mon_buffs sw_${(i + 1)}_1`,
                                            when: mon_buffs.length
                                        },
                                    ],
                                    class: 'mon_sing',
                                    style: middle_style
                                }
                            })
                        })
                    },
                    class: 'mons_place'
                }
            ]
        })

        if (window.innerWidth <= 500) {
            $('.mon_buffs').hide()
            $('.minus').hide()
        }

        console.log("FINISH")

    }

    $('body').on('click', '.plus, .minus', function () {
        var id = $(this).attr('data-id')
        $(`.toggle_${id}`).toggle()
    })

    function mod(n, m) {
        return ((n % m) + m) % m
    }

    $('body').on('click', '.v_l', function () {
        cur_phase -= 1
        renderOverall()
    })

    $('body').on('click', '.v_r', function () {
        cur_phase += 1
        renderOverall()
    })

    $('body').on('click', '.f_l', function () {
        cur_level -= 1
        renderOverall()
    })

    $('body').on('click', '.f_r', function () {
        cur_level += 1
        renderOverall()
    })

    $('body').on('click', '.sw_but', function () {
        var but_id = $(this).attr('data-id')
        $(`.sw_${but_id}_1`).toggle()
        $(`.sw_${but_id}_2`).toggle()
    })

    function download(link, name) {
        if (download_cd) return
        download_cd = 1
        setTimeout(function () {
            download_cd = 0
        }, 2000)
        $('.temp').remove()
        $('.content').render({
            a: link,
            attr: {
                download: `${name}.png`
            },
            style: {
                display: 'none'
            },
            t: {
                p: 'temp'
            },
            class: 'temp'
        })
        $('.temp p').click()
    }

})