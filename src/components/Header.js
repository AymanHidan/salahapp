import React from "react"
import "../style.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://i.ibb.co/0FyGcqf/pngwing-com.png" 
                className="header--image"
            />
            <h2 className="header--title">تطبيق الصلاة</h2>
            <h4 className="header--project">الصلوات الخمس</h4>
        </header>
    )
}