import React, { useEffect, useState } from "react";
import "./WalletMain.css";

// import deposit from "../icons/balance/deposit.svg";
// import send from "../icons/balance/send.svg";
// import transactions from "../icons/balance/transactions.svg";

import sort from "../icons/transactions/Sort.svg";
import usdt from "../icons/transactions/usdt.svg";
import uah from "../icons/transactions/uah.svg";

// import home from "../icons/app-nav/Home.svg"
// import transfers from "../icons/app-nav/transfers.svg"
// import settgins from "../icons/app-nav/Settings.svg"

const WalletMain = () => {
    
    const countMoney = 32453.45;
    const [counterMoney, setCounterMoney] = useState(0);
    
    useEffect(() => {
        let numberpPlus = Math.round(countMoney / 100 * 1)
        const idInterval = setInterval(() => {
            if (countMoney <= counterMoney) {  
                setCounterMoney(countMoney);
                clearInterval(idInterval); 
            } else {
                setCounterMoney(prev => prev + numberpPlus);
            }

        }, 10);
    
        return () => clearInterval(idInterval);
    }, [counterMoney]);


  return (
    <div className="wrapper">
      <div className="app-nav">
        <div className="background"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="#E6E0E9"/>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28596 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28596 2 4.92893 2 3.46447 3.46447ZM10.9307 7.56507C11.2427 7.29271 11.2749 6.81893 11.0026 6.50685C10.7302 6.19477 10.2564 6.16257 9.94435 6.43493L6.50685 9.43493C6.2713 9.6405 6.18798 9.97062 6.29775 10.2633C6.40753 10.5561 6.68737 10.75 7 10.75L17 10.75C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H9L10.9307 7.56507ZM17.7022 13.7367C17.5925 13.4439 17.3126 13.25 17 13.25L7 13.25C6.58579 13.25 6.25 13.5858 6.25 14C6.25 14.4142 6.58579 14.75 7 14.75L15 14.75L13.0694 16.4349C12.7573 16.7073 12.7251 17.1811 12.9974 17.4931C13.2698 17.8052 13.7436 17.8374 14.0557 17.5651L17.4932 14.5651C17.7287 14.3595 17.812 14.0294 17.7022 13.7367Z" fill="#7D7D7D"/>
        </svg>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#7D7D7D"/>
        </svg>
      </div>

      <main>
        {/*  balance-block && transactions */}
        <div className="balance">
          <h2>Мой счет</h2>

          <div className="money">
            <p className="my-money">₴ {counterMoney}</p>
            <p className="interest">+96.11%</p>
          </div>

          <div className="control-balance">
            <button id="deposit">
                <svg  viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.44466 9C2.44466 5.46447 2.44466 3.6967 3.54301 2.59835C4.64136 1.5 6.40912 1.5 9.94466 1.5C13.4802 1.5 15.248 1.5 16.3463 2.59835C17.4447 3.6967 17.4447 5.46447 17.4447 9C17.4447 12.5355 17.4447 14.3033 16.3463 15.4016C15.248 16.5 13.4802 16.5 9.94466 16.5C6.40912 16.5 4.64136 16.5 3.54301 15.4016C2.44466 14.3033 2.44466 12.5355 2.44466 9ZM9.94466 4.6875C10.2553 4.6875 10.5072 4.93934 10.5072 5.25V9.142L11.7969 7.85225C12.0166 7.63258 12.3727 7.63258 12.5924 7.85225C12.8121 8.07192 12.8121 8.42808 12.5924 8.64775L10.3424 10.8977C10.2369 11.0032 10.0938 11.0625 9.94466 11.0625C9.79547 11.0625 9.6524 11.0032 9.54691 10.8977L7.29691 8.64775C7.07724 8.42808 7.07724 8.07192 7.29691 7.85225C7.51658 7.63258 7.87273 7.63258 8.0924 7.85225L9.38216 9.142V5.25C9.38216 4.93934 9.63399 4.6875 9.94466 4.6875ZM6.94466 12.1875C6.634 12.1875 6.38216 12.4393 6.38216 12.75C6.38216 13.0607 6.634 13.3125 6.94466 13.3125H12.9447C13.2553 13.3125 13.5072 13.0607 13.5072 12.75C13.5072 12.4393 13.2553 12.1875 12.9447 12.1875H6.94466Z" fill="#E6E0E9"/>
                </svg>
              <p>Депозит</p>
            </button>
            <button id="send-money">
                <svg  viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.55731 9C1.55731 5.46447 1.55731 3.6967 2.65566 2.59835C3.75401 1.5 5.52178 1.5 9.05731 1.5C12.5928 1.5 14.3606 1.5 15.459 2.59835C16.5573 3.6967 16.5573 5.46447 16.5573 9C16.5573 12.5355 16.5573 14.3033 15.459 15.4017C14.3606 16.5 12.5928 16.5 9.05731 16.5C5.52178 16.5 3.75401 16.5 2.65566 15.4017C1.55731 14.3033 1.55731 12.5355 1.55731 9ZM9.05731 13.3125C9.36797 13.3125 9.61981 13.0607 9.61981 12.75V8.858L10.9096 10.1477C11.1292 10.3674 11.4854 10.3674 11.7051 10.1477C11.9247 9.92808 11.9247 9.57192 11.7051 9.35225L9.45506 7.10225C9.34957 6.99676 9.2065 6.9375 9.05731 6.9375C8.90813 6.9375 8.76505 6.99676 8.65956 7.10225L6.40956 9.35225C6.18989 9.57192 6.18989 9.92808 6.40956 10.1477C6.62923 10.3674 6.98539 10.3674 7.20506 10.1477L8.49481 8.858V12.75C8.49481 13.0607 8.74665 13.3125 9.05731 13.3125ZM6.05731 5.8125C5.74665 5.8125 5.49481 5.56066 5.49481 5.25C5.49481 4.93934 5.74665 4.6875 6.05731 4.6875H12.0573C12.368 4.6875 12.6198 4.93934 12.6198 5.25C12.6198 5.56066 12.368 5.8125 12.0573 5.8125H6.05731Z" fill="#E6E0E9"/>
                </svg>
              <p>Отправить</p>
            </button>
            <button id="transactions">
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.59835 2.59835C1.5 3.6967 1.5 5.46447 1.5 9C1.5 12.5355 1.5 14.3033 2.59835 15.4017C3.6967 16.5 5.46447 16.5 9 16.5C12.5355 16.5 14.3033 16.5 15.4017 15.4017C16.5 14.3033 16.5 12.5355 16.5 9C16.5 5.46447 16.5 3.6967 15.4017 2.59835C14.3033 1.5 12.5355 1.5 9 1.5C5.46447 1.5 3.6967 1.5 2.59835 2.59835ZM8.19799 5.6738C8.43205 5.46953 8.4562 5.1142 8.25193 4.88014C8.04766 4.64608 7.69232 4.62193 7.45826 4.8262L4.88014 7.0762C4.70348 7.23037 4.64099 7.47796 4.72332 7.69751C4.80564 7.91705 5.01552 8.0625 5.25 8.0625L12.75 8.0625C13.0607 8.0625 13.3125 7.81066 13.3125 7.5C13.3125 7.18934 13.0607 6.9375 12.75 6.9375L6.75 6.9375L8.19799 5.6738ZM13.2767 10.3025C13.1944 10.0829 12.9845 9.9375 12.75 9.9375L5.25 9.9375C4.93934 9.9375 4.6875 10.1893 4.6875 10.5C4.6875 10.8107 4.93934 11.0625 5.25 11.0625L11.25 11.0625L9.80201 12.3262C9.56795 12.5305 9.5438 12.8858 9.74807 13.1199C9.95234 13.3539 10.3077 13.3781 10.5417 13.1738L13.1199 10.9238C13.2965 10.7696 13.359 10.522 13.2767 10.3025Z" fill="#E6E0E9"/>
                </svg>
                <p>Транзакции</p>
            </button>
          </div>
        </div>

        <div className="transactions">
          <div className="info">
            <p className="last-transactions">Последние транзакции</p>
            <div className="sort">
              <p>Сортировать</p>
              <img src={sort} alt="" />
            </div>
          </div>
          <ul>

            <li>
              <div className="info-transfer">
                <img src={usdt} alt="" />
                <div className="text-info">
                  <h2>USDT</h2>
                  <p>$1.00  <span>+0.01%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money plus">+2,635.48 USDT</p>
                <p className="time">01-11-24 18:24</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-3,736.93 UAH</p>
                <p className="time">31-10-24 17:33</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={usdt} alt="" />
                <div className="text-info">
                  <h2>USDT</h2>
                  <p>$1.00  <span>+0.01%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money plus">+12,234.09 USDT</p>
                <p className="time">30-10-24 06:31</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money plus">+20,000 UAH</p>
                <p className="time">28-10-24 09:15</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

            <li>
              <div className="info-transfer">
                <img src={uah} alt="" />
                <div className="text-info">
                  <h2>UAH</h2>
                  <p>$0.024  <span>+1.2%</span></p>
                </div>
              </div>
              <div className="data">
                <p className="count-money minus">-14,734 UAH</p>
                <p className="time">26-10-24 21:44</p>
              </div>
            </li>

          </ul>
        </div>
      </main>
    </div>
  );
};

export default WalletMain;
