import React from 'react'
import Button from 'react-bootstrap/Button';


function Todo() {
    return (
        <div className='Todo'>
            <div className="container">
                <div className="row my-5">
                    <div className="col-8 todolist">
                        <div className="choice">
                            <form action="" className='my-5'>
                                <h1 className='mb-3'>TO DO APP</h1>
                                <h3>Tarih ve Saat Seçiniz :</h3>
                                <input type="date" id='tarih' />
                                <input type="time" id='saat' className='ms-2' />
                            </form>
                            <label htmlFor="gorevText">Görev yazınız :</label>
                            <input id='gorevText' type="text"/>
                            <Button id='gorevEkle' onClick={handleGorevEkle} variant="outline-dark">Görev Ekle!</Button>
                            <h3 className='mt-5'>Arkaplan rengi seçiniz :</h3>
                            <input type="color" name="" id="colorChoice" /> <br />
                            <Button id='renkSec' onClick={handleRenkSec} variant="outline-dark">Renk Seç!</Button>
                        </div>
                    </div>
                    <div className="col-4 gorevler"></div>
                </div>
            </div>
        </div>
    )
}

function handleRenkSec() {
    const renk = document.getElementById('colorChoice').value;
    document.querySelector(".todolist").style.backgroundColor = renk;
}

function handleGorevEkle() {
    const tarih = document.getElementById('tarih').value;
    const saat = document.getElementById('saat').value;
    const gorev=document.getElementById("gorevText").value;
    if (gorev) {
        const ul = document.createElement('ul');
        ul.classList.add('list-group', 'mb-3');
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${tarih}-${saat}-${gorev}`;
        ul.appendChild(li);
        const todolist = document.querySelector('.gorevler');
        todolist.appendChild(ul);
        li.addEventListener('click', () => {
            li.style.backgroundColor="green";
        });
        li.addEventListener('dblclick', () => {
            ul.removeChild(li);
        });
    }
}




export default Todo