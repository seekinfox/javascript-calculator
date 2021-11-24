(() => {
    var number = document.querySelectorAll('.number'),
        operator = document.querySelectorAll('.oprtr'),
        control = document.querySelectorAll('.control'),
        input = document.getElementById("input"),
        output = document.getElementById("output"),
        equal = document.querySelector('.eql'),
        clear = document.querySelector('.clr'),
        count = 0,
        arr = [];
    number.forEach((number) => {
        number.addEventListener('click', (e) => {
            var num = e.target.dataset.num;
            input.value += num;
        })
    })
    operator.forEach((item) => {

        item.addEventListener("click", (o) => {
            var operation = o.target.dataset.opr;
            input.value += operation;
        })
    })
    equal.addEventListener('click', () => {
        var getInput = input.value;
        console.log(getInput)
        if (getInput === '') {
            getInput = 0;
        }

        function math(obj) {
            return Function('"use strict"; return(' + obj + ')')();
        }
        console.log(math(getInput));
        output.innerHTML = math(getInput);
    })
    clear.addEventListener('click', () => {
        output.innerHTML = 'output'
        input.value = '';
    })


})()
