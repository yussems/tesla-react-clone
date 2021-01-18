import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Item.css'

const Item = ({title,desc,descLink,backgroundImg,leftBtnTxt,rightBtnTxt,rightBtnLink,leftBtnLink,twoButtons,first}) => {
    return (
        <div className='item' style={{
            backgroundImage:`url(${backgroundImg})`
        }}>
            <div className="item_container">
                <div className='item_text'>
                    <p>{title}</p>
                    <div className="item_textdesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Button imp='primary' text={leftBtnLink} link={leftBtnLink}/>
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnLink} link={rightBtnLink}/>
                        )}
                    </div>
                    {first && (
                        <div className='item_expand'>
                            <ExpandMoreIcon/>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Item
