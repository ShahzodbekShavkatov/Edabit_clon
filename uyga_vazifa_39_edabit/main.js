let select = document.querySelector(".select")
let p = document.querySelector(".p")
let input = document.querySelector(".input")
let img_example = document.querySelector(".img_example")
let btn = document.querySelector(".btn")
let ul = document.querySelector(".ul")
let change_example = document.querySelector(".change_example")

let examples_data = [
    {
        example: "n butun sonni oladigan va 1 dan n gacha sonlarni ko‘paytirish jadvalini n-martagacha qaytaruvchi funksiya yarating. Funksiya nomi - multTable().",
        img: "img/kod1-masala.jpg",
        functionName: "multTable",
        check: [
            [1, [1]],
            [2, [ [1, 2], [2, 4] ]],
            [3, [ [1, 2, 3], [2, 4, 6], [3, 6, 9] ]]
        ]
    },
    {
        example: `S satr anagrammalari deb, S satrdagi belgilar o’rnini almashtirib hosil
        qilish mumkin bo’lgan satrlarga aytiladi. Misol uchun “abcd” so’zini
        anagrammalaridan biri “cdab”. Sizning vazifangiz S satrdan nechta turli xil anagrammalarni hosil qilish
        mumkinligini topishdan iborat. Funksiya nomi - anagramma()`,
        img: "img/kod2-masala.jpg",
        functionName: "anagramma",
        check: [
            [`"abc"`, 6],
            [`"non"`, 3]
        ]
    },
    {
        example: `Berilgan butun n sonini a^b (a > 0 va b > 1 butun sonlar)
        ko'rinishida tasvirlash mumkinmi yoki yo'qligini tekshirishingiz
        kerak
        Kiruvchi ma’lumotlar:
        Yagona qatorda bitta butun n soni (0<=n<=10^8)
        Chiquvchi ma’lumotlar:
        Agar a^b ko'rinishida tasvirlab bo'lsa Yes aks holda No so'zlari
        chiqishi kerak. Funksiya nomi - numbers()`,
        img: "img/kod3-masala.jpg",
        functionName: "numbers",
        check: [
            [215, "no"],
            [8, "Yes"]
        ]
    },
    {
        example: `RGB to Hex Color Converter. Funksiya nomi - rgb()`,
        img: "img/kod4-masala.jpg",
        functionName: "rgb",
        check: [
            ["0, 128, 192", "#0080c0"],
            ["45, 255, 192", "#2dffc0"],
            ["0, 0, 0", "#000000"]
        ]
    },
    {
        example: `Kritilgan stringni “#$%” belgilarisiz qaytaradigan deleteChar(s)
        funksiyasini tuzing. Funksiya nomi - deleteChar()`,
        img: "img/kod5-masala.jpg",
        functionName: "deleteChar",
        check: [
            [`"Salom## qa#lay#san"`, "Salom qalaysan"],
            [`"JS #bil#$an z#av%q ol!"`, "JS bilan zavq ol!"]
        ]
    }
]

function example_count () {
    for (let i = 0; i < examples_data.length; i++) {
        let option = document.createElement("option")
        option.textContent = (i + 1) + "-masala"
        option.value = (i + 1)
        select.append(option)
    }
}

example_count()

change_example.addEventListener("click", event => {
    render_example(select.value)
})

function render_example(select_value) {
    let select_valu = (select_value ? select_value : select.value) - 1
    p.textContent = examples_data[select_valu].example
    img_example.src = examples_data[select_valu].img
}
render_example()

btn.addEventListener("click", event => {
    example_check(select.value)
})

function example_check(select_val) {
    let select_vals = parseInt(select_val - 1)
    let example_text = ``
    example_text = input.value

    for (let i = 0; i < examples_data[select_vals].check.length; i++) {
        let func = new Function ( example_text + 'return ' + examples_data[select_vals].functionName + '(' + (examples_data[select_vals].check[i][0]) + ')')
        if (func() == `${examples_data[select_vals].check[i][1]}`) {
            let li = document.createElement("li")
            li.innerHTML = `${i + 1}.` + examples_data[select_vals].functionName+`( ${examples_data[select_vals].check[i][0]})` + ` ${examples_data[select_vals].check[i][1]}` + ' ✅'
            ul.append(li)
            
        }
        else {
            let li = document.createElement("li")
            li.textContent = `${i + 1}.` + ' ❌'
            ul.append(li)
        }
    }
}