import { useState, useEffect } from "react"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import styles from './top.module.scss'
function GoToTop() {
    const [goToTop, setGoToTop] = useState(false)
    useEffect(() => {
        const handleScroll = () =>{
            setGoToTop( window.scrollY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return ( 
        <>
            {goToTop && 
            <div 
            style={{
                backgroundColor: 'pink',
                borderRadius: '10px',
                padding: '10px',
                position: 'fixed',
                right : '20px',
                bottom : '20px',
                width: '60px',
                height: '60px',
                cursor: 'pointer',
                zIndex: '13',
                
            }}
            className={styles.GoToTop_container}
            onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
            >
                <KeyboardArrowUpOutlinedIcon 
                    style={{
                        width: '40px',
                        height: '40px',
                    }}
                />
            </div>
        }
        </>
    );
}

export default GoToTop;