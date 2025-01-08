const flashCardData =  [
    {
        'id': 1,
        'titleFlashcard': 'Soumatome - Week 5 - Toàn bộ',
        'level': 'N2',
        'type': 'Kanji',
        'vocabulary': [
            {
                'write': '傾',
                'hiragana': 'ケイ・かたむく・かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Nghiêng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '傾向',
                'hiragana': 'けいこう',
                'kanji': 'KHUYNH HƯỚNG',
                'meaning': 'xu hướng',
                'example': '若者は結婚する前に子供を出来る傾向がある',
                'ex_meaning': 'Giới trẻ thường có khuynh hướng có con trước khi kết hôn.'
            },
            {
                'write': '傾く',
                'hiragana': 'かたむく',
                'kanji': 'KHUYNH',
                'meaning': 'ngả, nghiêng (hướng, ý kiến), chao đảo (kt, công ty)',
                'example': '右に傾く',
                'ex_meaning': 'Nghiêng về bên phải'
            },
            {
                'write': '傾ける',
                'hiragana': 'かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Làm cho gì đó nghiêng, làm suy yếu,...;',
                'example': '首を傾ける',
                'ex_meaning': 'Nghiêng đầu qua một bên, thắc mắc.'
            },
            {
                'write': '横',
                'hiragana': 'オウ・よこ',
                'kanji': 'HOÀNH',
                'meaning': 'ngang',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '横転',
                'hiragana': 'おうてん',
                'kanji': 'HOÀNH CHUYỂN',
                'meaning': 'Lật ngửa,　lật nghiêng xe',
                'example': 'そしたら 横転 したの手伝 ってやっからよ',
                'ex_meaning': 'Sau đó, tôi sẽ giúp bạn lật ngược toa xe.'
            },
            {
                'write': '横断歩道',
                'hiragana': 'おうだんほどう',
                'kanji': 'HOÀNH ĐOẠN BỘ ĐẠO',
                'meaning': 'Đường cho người đi bộ',
                'example': 'あなたは横断歩道ではもっと注意すべきだ',
                'ex_meaning': 'Bạn nên cẩn thận hơn khi đi qua đường.'
            },
            {
                'write': '湯',
                'hiragana': 'トウ・ゆ',
                'kanji': 'THANG',
                'meaning': 'Nước nóng',
                'example': '',
                'ex_meaning': ''
            },
            {

                'write': '熱湯',
                'hiragana': 'ねっとう',
                'kanji': 'NHIỆT THANG',
                'meaning': 'Nước sôi',
                'example': '熱湯が突然吹き(とつぜんふき)を出した',
                'ex_meaning': 'Nước nóng trào ra ngoài.'
            },
            {
                'write': '湯飲み',
                'hiragana': 'ゆのみ',
                'kanji': 'THANG ẨM',
                'meaning': 'Chén trà',
                'example': '壊れた湯飲みの補充(ほじゅう)をした',
                'ex_meaning': 'Tôi đã thay thế những chiếc cốc bị vỡ bằng những chiếc cốc mới.'
            },
            {
                'id': 11,
                'write': '湯気',
                'hiragana': 'ゆげ',
                'kanji': 'THANG KHÍ',
                'meaning': 'Hơi nước',
                'example': '温泉から湯気が立ち上っている',
                'ex_meaning': 'Hơi nước bốc lên từ bể tắm'
            },
            {
                'id': 12,
                'write': '恐',
                'hiragana': 'おそれる・おそろしい・キョウ',
                'kanji': 'KHỦNG',
                'meaning': 'Sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐怖',
                'hiragana': 'きょうふ',
                'kanji': 'KHỦNG PHỐ',
                'meaning': 'Khủng bố',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐ろしい',
                'hiragana': 'おそろしい',
                'kanji': 'KHỦNG',
                'meaning': 'Đáng sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐れる',
                'hiragana': 'おそれる',
                'kanji': 'KHỦNG',
                'meaning': 'Nỗi sợ; mối lo ngại',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐れ入る',
                'hiragana': 'おそれいる',
                'kanji': 'KHỦNG NHẬP',
                'meaning': 'Xin lỗi (khi làm phiền, thất lễ)',
                'example': '恐れ入りますが...',
                'ex_meaning': 'Xin lỗi... (dùng trang trọng khi mào đầu nhờ vả người khác)'
            },
            {
                'write': '原',
                'hiragana': 'はら・ゲン',
                'kanji': 'NGUYÊN',
                'meaning': 'Cánh đồng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '原料',
                'hiragana': 'げんりょう',
                'kanji': 'NGUYÊN LIÊU',
                'meaning': 'Nguyên liệu',
                'example': '原料を買い入れる',
                'ex_meaning': 'Mua nguyên liệu vào'
            },
            {
                'write': '原産',
                'hiragana': 'げんさん',
                'kanji': 'NGUYÊN SẢN',
                'meaning': 'Nơi sản xuất',
                'example': '原産国(げんさんこく)',
                'ex_meaning': 'Nước sản xuất'
            },
            {
                'write': '野原',
                'hiragana': 'のはら',
                'kanji': 'DÃ NGUYÊN',
                'meaning': 'Thảo nguyên, đồng cỏ',
                'example': '野原には野生(やせい)の花がたくさんある',
                'ex_meaning': 'Những cánh đồng rất nhiều hoa dại.'
            },
            {
                'write': '因',
                'hiragana': 'イン',
                'kanji': 'NHÂN',
                'meaning': 'Nguyên nhân',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '要因',
                'hiragana': 'よういん',
                'kanji': 'YẾU NHÂN',
                'meaning': 'Nhân tố',
                'example': '発生要因',
                'ex_meaning': 'Yếu tố phát sinh'
            },
            {
                'write': '置',
                'hiragana': 'TRÍ',
                'kanji': 'おく・チ',
                'meaning': 'Đặt dựng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '位置',
                'hiragana': 'いち',
                'kanji': 'VỊ TRÍ',
                'meaning': 'Vị trí',
                'example': '元の位置',
                'ex_meaning': 'Vị trí ban đầu'
            },
            {
                'write': '装置',
                'hiragana': 'そうち',
                'kanji': 'TRANG TRÍ',
                'meaning': 'trang thiết bị、device',
                'example': 'これは水みずをきれいにする装置そうちです',
                'ex_meaning': 'Đây là thiết bị làm sạch nước'
            },
            {
                'write': '置く',
                'hiragana': 'おく',
                'kanji': '  TRÍ',
                'meaning': 'Đặt, để',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '物置',
                'hiragana': 'ものおき',
                'kanji': 'VẬT TRÍ',
                'meaning': 'Kho cất đồ, phòng để đồ',
                'example': '物置に鍵(かぎ)をかけるのを忘れちゃった',
                'ex_meaning': 'Tôi quên khóa cửa kho.'
            }
        ]
    },
    {
        'id': 2,
        'titleFlashcard': 'Soumatome - Week 5 - Toàn bộ',
        'level': 'N2',
        'type': 'Kanji',
        'vocabulary': [
            {
                'write': '傾',
                'hiragana': 'ケイ・かたむく・かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Nghiêng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '横',
                'hiragana': 'オウ・よこ',
                'kanji': 'HOÀNH',
                'meaning': 'ngang',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '湯',
                'hiragana': 'トウ・ゆ',
                'kanji': 'THANG',
                'meaning': 'Nước nóng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐',
                'hiragana': 'おそれる・おそろしい・キョウ',
                'kanji': 'KHỦNG',
                'meaning': 'Sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '原',
                'hiragana': 'はら・ゲン',
                'kanji': 'NGUYÊN',
                'meaning': 'Cánh đồng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '因',
                'hiragana': 'イン',
                'kanji': 'NHÂN',
                'meaning': 'Nguyên nhân',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '置',
                'hiragana': 'TRÍ',
                'kanji': 'おく・チ',
                'meaning': 'Đặt dựng',
                'example': '',
                'ex_meaning': ''
            },
        ]
    },
    {
        'id': 3,
        'titleFlashcard': 'Soumatome - Week 5 - Toàn bộ',
        'level': 'N2',
        'type': 'Kanji',
        'vocabulary': [
            {
                'write': '傾',
                'hiragana': 'ケイ・かたむく・かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Nghiêng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '横',
                'hiragana': 'オウ・よこ',
                'kanji': 'HOÀNH',
                'meaning': 'ngang',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '湯',
                'hiragana': 'トウ・ゆ',
                'kanji': 'THANG',
                'meaning': 'Nước nóng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐',
                'hiragana': 'おそれる・おそろしい・キョウ',
                'kanji': 'KHỦNG',
                'meaning': 'Sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '原',
                'hiragana': 'はら・ゲン',
                'kanji': 'NGUYÊN',
                'meaning': 'Cánh đồng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '因',
                'hiragana': 'イン',
                'kanji': 'NHÂN',
                'meaning': 'Nguyên nhân',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '置',
                'hiragana': 'TRÍ',
                'kanji': 'おく・チ',
                'meaning': 'Đặt dựng',
                'example': '',
                'ex_meaning': ''
            },
        ]
    },
    {
        'id': 4,
        'titleFlashcard': 'Soumatome - Week 5 - Toàn bộ',
        'level': 'N2',
        'type': 'Kanji',
        'vocabulary': [
            {
                'write': '傾',
                'hiragana': 'ケイ・かたむく・かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Nghiêng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '横',
                'hiragana': 'オウ・よこ',
                'kanji': 'HOÀNH',
                'meaning': 'ngang',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '湯',
                'hiragana': 'トウ・ゆ',
                'kanji': 'THANG',
                'meaning': 'Nước nóng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐',
                'hiragana': 'おそれる・おそろしい・キョウ',
                'kanji': 'KHỦNG',
                'meaning': 'Sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '原',
                'hiragana': 'はら・ゲン',
                'kanji': 'NGUYÊN',
                'meaning': 'Cánh đồng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '因',
                'hiragana': 'イン',
                'kanji': 'NHÂN',
                'meaning': 'Nguyên nhân',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '置',
                'hiragana': 'TRÍ',
                'kanji': 'おく・チ',
                'meaning': 'Đặt dựng',
                'example': '',
                'ex_meaning': ''
            },
        ]
    },
    {
        'id': 5,
        'titleFlashcard': 'Soumatome - Week 5 - Toàn bộ',
        'level': 'N2',
        'type': 'Kanji',
        'vocabulary': [
            {
                'write': '傾',
                'hiragana': 'ケイ・かたむく・かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Nghiêng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '横',
                'hiragana': 'オウ・よこ',
                'kanji': 'HOÀNH',
                'meaning': 'ngang',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '湯',
                'hiragana': 'トウ・ゆ',
                'kanji': 'THANG',
                'meaning': 'Nước nóng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐',
                'hiragana': 'おそれる・おそろしい・キョウ',
                'kanji': 'KHỦNG',
                'meaning': 'Sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '原',
                'hiragana': 'はら・ゲン',
                'kanji': 'NGUYÊN',
                'meaning': 'Cánh đồng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '因',
                'hiragana': 'イン',
                'kanji': 'NHÂN',
                'meaning': 'Nguyên nhân',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '置',
                'hiragana': 'TRÍ',
                'kanji': 'おく・チ',
                'meaning': 'Đặt dựng',
                'example': '',
                'ex_meaning': ''
            },
        ]
    },
    {
        'id': 6,
        'titleFlashcard': 'Soumatome - Week 5',
        'level': 'N2',
        'type': 'Kanji',
        'vocabulary': [
            {
                'write': '傾',
                'hiragana': 'ケイ・かたむく・かたむける',
                'kanji': 'KHUYNH',
                'meaning': 'Nghiêng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '横',
                'hiragana': 'オウ・よこ',
                'kanji': 'HOÀNH',
                'meaning': 'ngang',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '湯',
                'hiragana': 'トウ・ゆ',
                'kanji': 'THANG',
                'meaning': 'Nước nóng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '恐',
                'hiragana': 'おそれる・おそろしい・キョウ',
                'kanji': 'KHỦNG',
                'meaning': 'Sợ',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '原',
                'hiragana': 'はら・ゲン',
                'kanji': 'NGUYÊN',
                'meaning': 'Cánh đồng',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '因',
                'hiragana': 'イン',
                'kanji': 'NHÂN',
                'meaning': 'Nguyên nhân',
                'example': '',
                'ex_meaning': ''
            },
            {
                'write': '置',
                'hiragana': 'TRÍ',
                'kanji': 'おく・チ',
                'meaning': 'Đặt dựng',
                'example': '',
                'ex_meaning': ''
            },
        ]
    }
]
export default flashCardData;