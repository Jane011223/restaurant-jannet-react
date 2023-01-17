import React, {useState} from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './ScrollButton.css';

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 75){
        setVisible(true)
        }
        else if (scrolled <= 75){
        setVisible(false)
        }
    };

    const scrollToTop = () =>{
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div onClick={scrollToTop} className = {visible ? "top_button" : "hidden"}>
            <ArrowUpwardIcon />
        </div>
    );
}

export default ScrollButton;
