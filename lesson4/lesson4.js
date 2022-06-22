console.log(document)

const blocks = document.getElementsByClassName('block')
// console.log(blocks)    //получили элемент по классу

const blockID = document.getElementById('block3')
// console.log(blockID)             //получили элемент по айди

blockID.className = 'changedClass'
// console.log(blockID.classList)     //изменили название класса

blockID.classList.add('secondClass')
// console.log(blockID.classList)   //добавили новый класс

blockID.classList.remove('block')
// console.log(blockID.classList)    //удалили класс

blockID.onclick = () => {
    blockID.classList.toggle('active')
}

const block = document.querySelector('.block');
// console.log(block)

const block2 = document.querySelectorAll('.block');
// console.log(block2)


const button = document.getElementById('button');
const input = document.getElementById('input');
button.onclick = () => {
    const tag = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.onclick = () => {
        tag.remove()
    }
    tag.setAttribute('class', 'block');
    tag.innerText = input.value;
    document.body.append(tag);
    tag.append(deleteButton);
    input.value = '';
}





