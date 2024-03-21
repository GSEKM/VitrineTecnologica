import { Link, useNavigate } from "react-router-dom";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { ImLab } from "react-icons/im";
import logo from "../../assets/logo-aitec.png";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../../services/api";

export function Header() {

    const [expanded, setExpanded] = useState(false);
    const menuMobile = () => setExpanded(!expanded);
    const navigate = useNavigate();
    const logout = () => {
      if (localStorage.getItem('authenticating') == 'true') {
          api.post("/logout", null, {
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': "Bearer " + localStorage.getItem('token')
              }
          })
            localStorage.removeItem('token')
            localStorage.setItem('authenticating', 'false')
            toast.success('Deslogado com sucesso!')
            setTimeout(() => {
                navigate('/')
            }, 100)
        } else {
            navigate('/login')
            window.location.reload()
        }
    }

    return (
        <header className="grid h-max">
            <ToastContainer />
            <div className="grid grid-cols-2 p-2 bg-[#26448B]">
                <img className="max-w-[200px] sm:max-w-sm " src={logo} alt="" />
                <ul className="inline-flex items-center justify-end gap-2 text-2xl text-white ">
                    <li>
                        <a href="/dashboard"> <AiOutlineUser /> </a>
                    </li>
                    <li onClick={menuMobile} className="sm:hidden cursor-pointer">
                        <AiOutlineMenu />
                    </li>
                    <li onClick={logout} className="cursor-pointer">
                        <IoLogInOutline />
                    </li>
                    <li>
                        <Link to="/"> <AiOutlineHome /> </Link>
                    </li>
                </ul>
            </div>
            <div className="bg-white h-3 shadow-2x1" />
            <div className="bg-[#5175B3] h-10 shadow" />
            <div className={!expanded ? "sm:flex sm:justify-center text-center text-white bg-white drop-shadow-2xl sm:ml-40 sm:mr-40 rounded-md" : "hidden"}>
                <ul className="sm:inline-flex grid sm:items-center justify-center gap-6 p-3 rounded-sm text-gray-700">
                    <li className="inline-flex items-center gap-1">
                        <IoMdPaper /><Link to="/patentes">Patentes</Link>
                    </li>
                    <li className="inline-flex items-center gap-1">
                        <IoHardwareChipOutline /><Link to="/softwares">Softwares</Link>
                    </li>
                    <li className="inline-flex items-center gap-1">
                        <BsBox /><Link to="/servicos">Serviços</Link>
                    </li>
                    <li className="inline-flex items-center gap-1">
                        <AiOutlineFileSearch /><Link to="/pesquisas">Pesquisas</Link>
                    </li>
                    <li className="inline-flex items-center gap-1">
                        <ImLab /><Link to="/laboratorio">Laboratórios</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}