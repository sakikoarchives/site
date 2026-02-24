NEW_GI = [
    {
        "Name": {
            "CH": "哥伦比娅",
            "EN": "Columbina",
            "JP": "コロンビーナ",
            "KR": "콜롬비나"
        },
        "Rarity": 5,
        "Link": "/gi/char/Columbina",
        "Icon": "/sakiko-res/Avatar/UI_AvatarIcon_Columbina.png",
        "Elem": "Water",
        "Type": "Skill_A_Catalyst_MD"
    },
    {
        "Name": {
            "CH": "兹白",
            "EN": "Zibai",
            "JP": "茲白",
            "KR": "자백"
        },
        "Rarity": 5,
        "Link": "/gi/char/Zibai",
        "Icon": "/sakiko-res/Avatar/UI_AvatarIcon_Zibai.png",
        "Elem": "Rock",
        "Type": "Skill_A_01"
    },
    {
        "Name": {
            "CH": "晨星与月的晓歌",
            "EN": "Aubade of Morningstar and Moon",
            "JP": "暁の星と月の歌JP0D",
            "KR": "샛별과 달의 여명"
        },
        "Rarity": 5,
        "Link": "/gi/char/15043",
        "Icon": "/sakiko-res/Relic/UI_RelicIcon_15043_4.png",
        "Type": "https://sakikoarchives.com/.https://sakikoarchives.com/images/GCG_UI/3004"
    },
    {
        "Name": {
            "CH": "风起之时",
            "EN": "Wherever a Breeze Blows",
            "JP": "風吹く時",
            "KR": "바람이 시작되는 순간"
        },
        "Rarity": 5,
        "Link": "/gi/char/15044",
        "Icon": "/sakiko-res/Relic/UI_RelicIcon_15044_4.png",
        "Type": "https://sakikoarchives.com/.https://sakikoarchives.com/images/GCG_UI/3004"
    },
    {
        "Name": {
            "CH": "朏魄含光",
            "EN": "Lightbearing Moonshard",
            "JP": "光を纏う月魂JP0D",
            "KR": "초승달의 빛"
        },
        "Rarity": 5,
        "Link": "/gi/char/11519",
        "Icon": "/sakiko-res/Weapon/UI_EquipIcon_Sword_SilverwareSaw.png",
        "Type": "Skill_A_01"
    },
    {
        "Name": {
            "CH": "帷间夜曲",
            "EN": "Nocturne's Curtain Call",
            "JP": "帷の間の夜曲JP0D",
            "KR": "막간의 야상곡"
        },
        "Rarity": 5,
        "Link": "/gi/char/14522",
        "Icon": "/sakiko-res/Weapon/UI_EquipIcon_Catalyst_Brisingamen.png",
        "Type": "Skill_A_Catalyst_MD"
    },
    {
        "Name": {
            "CH": "叶洛亚",
            "EN": "Illuga",
            "JP": "イルーガ",
            "KR": "일루가"
        },
        "Rarity": 4,
        "Link": "/gi/char/Illuga",
        "Icon": "/sakiko-res/Avatar/UI_AvatarIcon_Illuga.png",
        "Elem": "Rock",
        "Type": "Skill_A_03"
    }
]//GI

NEW_SR = [
    {
        "Name": {
            "CH": "大丽花",
            "EN": "The Dahlia",
            "JP": "ダリア",
            "KR": "달리아"
        },
        "Rarity": 5,
        "Link": "/sr/char/1321",
        "Icon": "/images/avataricon/avatar/1321.png",
        "Elem": "Fire",
        "Type": "Nihility"
    },
    {
        "Name": {
            "CH": "勿忘她的火焰",
            "EN": "Never Forget Her Flame",
            "JP": "彼女の炎を忘れずに",
            "KR": "그녀의 불꽃을 잊지 말라"
        },
        "Rarity": 5,
        "Link": "/sr/char/23050",
        "Icon": "/images/lightconemediumicon/23050.png",
        "Type": "Nihility"
    }
]//SR

var gi_ch = []
var sr_ch = []
var gi_en = []
var sr_en = []

for (const i of NEW_GI) {
    if (i.Elem) {
        gi_ch.push(i.Name.CH)
        gi_en.push(i.Name.EN)
    }
}
for (const i of NEW_SR) {
    if (i.Elem) {
        sr_ch.push(i.Name.CH)
        sr_en.push(i.Name.EN)
    }
}

document.querySelector('meta[name="description"]').setAttribute("content", `Genshin ${VER_GI.substring(0, 3)}: ${gi_en.join(', ')} | Star Rail ${VER_SR.substring(0, 3)}: ${sr_en.join(', ')} | 原神 ${VER_GI.substring(0, 3)}: ${gi_ch.join('、')} | 星穹铁道 ${VER_SR.substring(0, 3)}: ${sr_ch.join('、')}`);