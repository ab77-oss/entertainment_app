import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import Title from './Title';
import Navbar from '../components/Navbar'
import styles from '../styles/sass/_Pages.module.scss';
import { bookmarked } from '../redux-toolkit/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import Trending from './Trending';


function CardComp(props) {
    // get the state from the store using useSelector and methods of reducer using useDispatch
    const dataBookMark = useSelector(state => state.book.data);
    const dispatch = useDispatch()
    
       // eslint-disable-next-line react-hooks/exhaustive-deps
    let Hi =[]; // array used to count the number of articles typed in the search bar
    // track the change in the inpout componant ( serach bar)
    const [mv, setCat] = useState(''); 
    // track the number of elements found during the use of the search bar
    const [count, setCount] =useState(0);
    // used to display or hide compenant in the page according to the app
    // the goal, is to use one functional component in multiple pages
    const [show, setShow] = useState(true);
    // number=0 to display the movies and tvshows pages , 1 bookmarked page, 2 home page
    // the num is a props fir the component CardComp which means taht any change in this
    // number means a change of the page as said before.  
    const [number, setNumber] = useState(props.num)
    
    // switch the show state for any change in the search bar (mv) , it's used to hide (or display) the trending
    // componant in the home page if the user try to use the search 
    useEffect(() => {
        mv!== '' ? setShow(false) : setShow(true); 
      },[mv]);


    // add One element for any change in the array, this data will be used to display the number of articles found 
    // during the use of the search bar
      useEffect(() => {
        setCount(Hi.length);
      },[Hi]);
    
  return (
    
        <>
            <Navbar color2={props.color2}  color3={props.color3} color4={props.color4} color5={props.color5} /> 
            <div className={styles.search}>
                <div className={styles.labelSearch}>
                    <span className={styles.log}>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
                    </span>
                    <input
                        className={styles.inpt}
                        placeholder={props.placeholder}
                        type="text" 
                        value={mv}
                        onChange={(e) => setCat(e.target.value)}
                        />
                </div>
            </div>
            {/* component Title is displayed only if the search bar is inactive */}
            {show && <Title title={props.categ} />}
            {/* the component Trending is used only in the home page */}
            {number===2 && show && <Trending />}
            {/* the component Title is used only in the home page */}
            {number ===2 && show && <Title title="Recommanded for you" />}
            {/* the display of number of articles found in case the user uses search bar (show===false) */}
            {!show && <Title title= {`Found ${count} result(s) for '${mv}'`} />}
            
                <div className={styles.container}>
                {
                    
                    dataBookMark.map(da => {
                      {/* the display of the component depends on the number props */}
                    return ( 
                        ( (
                            
                            (number === 0 && da.category === props.cat && da.title.toLowerCase().includes(mv.toLowerCase()) ) ||
                            (number === 1 && da.isBookmarked && da.title.toLowerCase().includes(mv.toLowerCase())) ||
                            (number === 2 && da.thumbnail.regular && da.title.toLowerCase().includes(mv.toLowerCase()))
                            )
                         
                        && (
                            
                            <div key={da.title} className={styles.principal}>
                            {/* add titles that contain text written in the search bar  */}
                            {da.title.toLowerCase().includes(mv.toLowerCase()) &&
                                        Hi.push(da.title)
                                    }
                                <Image className={styles.img1} src={da.thumbnail.regular.small} fill={"outfit"} alt='image' priority/> 
                                <Image className={styles.img2} src={da.thumbnail.regular.medium} fill={"outfit"} alt='image' priority/>
                                <Image className={styles.img3} src={da.thumbnail.regular.large} fill={"outfit"} alt='image' priority/>
            
                                <div className={styles.circle}
                                        // in case of the click on the bookmark send the title to the reducer for update then to the store
                                        onClick={() => dispatch(bookmarked(da.title))}>

                                            { da.isBookmarked ? (
                                                <svg className={styles.icon} width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg>
                                            ):(
                                                <svg className={styles.icon} width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" fill="none"/></svg>
                                            )
                                            }  
                                
                                </div>
                                <div className={styles.play}>
                                    <div className={styles.button}>
                                        <div className={styles.circle1}>
                                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                                        </div>
                                        <div className={styles.text}>
                                            Play
                                        </div>
                                    </div>
                                </div> 
                                <div className={styles.bottom}>
                                    <div className={styles.cate}>
                                        <div className={styles.year}>{da.year}</div>.
                                        <div className={styles.ic}>
                                        {da.category=="Movie"? 
                                        <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>
                                            : 
                                        <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/></svg>
                                        } 
                                        </div>
                                        <div className={styles.ca}>{da.category}</div>.
                                        <div className={styles.rat}>{da.rating}</div>  
                                    </div>
                                    <div className={styles.tit}>{da.title}</div>
                                </div>
                            </div>
                        ))
                        )
                        })
                    }
                    </div>
             </>
       )
     }
  


export default CardComp