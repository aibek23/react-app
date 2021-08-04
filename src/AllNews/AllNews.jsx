import React from 'react';
import s from './AllNews.module.css';

const Section = () => {
    return (

            <div className={s.news}>
                <div className={s.card}>
                    <div className={s.card__date}>
                        <p><b>Date\</b>04.08.2021</p>
                    </div>
                    <img src="https://w-dog.ru/wallpapers/0/63/451288677289029/ssha-chikago-neboskreby-amerika.jpg" alt=""></img>
                    <h3>Что такое Lorem Ipsum?</h3>
                    <p>Lorem Ipsum - это просто фиктивный текст в полиграфической и наборной индустрии. Lorem Ipsum был стандартным фиктивным текстом в отрасли с 1500-х годов, когда неизвестный типограф взял камбуз и скремблировал его, чтобы сделать книгу образцов шрифта. в электронный набор, оставшись практически Он был популяризирован в 1960-х годах с выпуском листов Letraset, содержащих отрывки Lorem ... <a href="">читать далше</a></p>
                    
                    <a className={s.author} href="#">Владимир Ярославский</a>
                 </div>
            </div>
    )   
}

export default Section;