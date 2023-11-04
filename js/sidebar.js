let sideBar = `

<div class="top-bar">
                <div class="search">
                    <input type="text" name="search" placeholder="search here">
                    <label for="search"><i class="fas fa-search"></i></label>
                </div>
                <i class="fas fa-bell"></i>
                <div class="user-wrapper">
                    <div class="user">
                        <img src="img/avatar.svg" alt="">
                    </div>
                    <div class="user-details">
                        <p class="username"></p>
                        <p class="email"></p>
                    </div>
                </div>
                
            </div>
       
`;
document.getElementById('main').insertAdjacentHTML("afterbegin", sideBar);