
// 你要抽男生还是女生？在下面填 girl or boy or any，填 any 就不限定性别
var pick_gender = "any"

// 你要cue的人，填了就是天选之子不再随机，填空就随机，就像下面这样
//  cue = ""
//  cue = "hh"
var cue = ""

// 下面是学生列表，英文逗号隔开，英文引号包裹
var students = {
    boy: [
        'hh','genki','suda','你猜'
    ],
    girl: [
        'gyz','black','蔡徐坤'
    ]
}

var picked_students = []