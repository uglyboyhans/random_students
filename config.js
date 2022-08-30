var pick_gender = "any"

// 你要cue的人，填了就是天选之子不再随机，填空就随机，就像下面这样
//  cue = ""
//  cue = "hh"
var cue = ""

// 下面是学生列表，英文逗号隔开，英文引号包裹，可以逗号后面可以换行方便阅读
var students = {
    boy: [
        'hh','genki',
        'suda','你猜'
    ],
    girl: [
        'gyz','black',
        '蔡徐坤'
    ]
}

var picked_students = []