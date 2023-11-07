let nav = `
<div class="side-bar">
            <ul>
                <li>
                    <a href="#">
                        <i class="fas fa-clinic-medical"></i>
                        <div class="title">N</div>
                    </a>
                </li>
                <li>
                    <a href="dashboard.html">
                        <span class="material-symbols-outlined">
                            dashboard
                        </span>
                        <div class="title">Dashboard</div>
                    </a>
                </li>
                <li>
                    <a href="profile.html">
                        <span class="material-symbols-outlined">
                            person_outline
                        </span>
                        <div class="title">Profile</div>
                    </a>
                </li>
                <li>
                    <a href="add-symptom.html">
                        <span class="material-symbols-outlined">
                            stethoscope
                        </span>
                        <div class="title">Symtoms </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-symbols-outlined">
                            settings
                        </span>
                        <div class="title">Settings</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-symbols-outlined">
                            contact_support
                        </span>
                        <div class="title">Help</div>
                    </a>
                </li>
                <li>
                    <a href="#" id="logout">
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                        <div class="title" >logout</div>
                    </a>
                </li>
            </ul>
            
        </div> 
        <!--**********************************
            Nav header end
        ***********************************-->
       
`;
document.getElementById('container').insertAdjacentHTML("afterbegin", nav);