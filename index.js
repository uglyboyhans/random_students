
function pick_student() {
    if (cue) {
        return cue
    }
    let pool = []
    if (pick_gender === "girl" || pick_gender === "boy") {
        pool = students[pick_gender]
    } else {
        pool = students["girl"].concat(students["boy"])
    }
    pool = pool.filter(x => !picked_students.includes(x))
    let lenOfPool = pool.length
    if (lenOfPool === 0) {
        return "没人啦！！请刷新"
    }
    let index = Math.floor(Math.random() * 1000) % lenOfPool;
    console.log(index)
    let picked_student = pool[index]
    picked_students.push(picked_student)
    return picked_student
}

function show_name() {
    console.log(students)
    let name = pick_student()
    document.getElementById("picked_students").innerText = `${name}`
}

document.getElementById("pick").onclick = function () {
    pick_gender = "any"
    show_name()
}
document.getElementById("pick_girl").onclick = function () {
    pick_gender = "girl"
    show_name()
}
document.getElementById("pick_boy").onclick = function () {
    pick_gender = "boy"
    show_name()
}

document.getElementById("refresh").onclick = function () {
    history.go(0)
}