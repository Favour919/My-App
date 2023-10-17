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
                    <a href="#">
                        <i class="fas fa-th-large"></i>
                        <div class="title">Dashboard</div>
                    </a>
                </li>
                <li>
                    <a href="symptom.html">
                        <i class="fas fa-stethoscope"></i>
                        <div class="title">Symtoms </div>
                    </a>
                </li>
                <li>
                    <a href="profile.html">
                        <i class="fas fa-user-md"></i>
                        <div class="title">Profile</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-cog"></i>
                        <div class="title">Settings</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-question"></i>
                        <div class="title">Help</div>
                    </a>
                </li>
            </ul>
            
        </div> 
        <!--**********************************
            Nav header end
        ***********************************-->
       
`;
document.getElementById('container').insertAdjacentHTML("afterbegin", nav);