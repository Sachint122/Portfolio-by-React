import React from 'react'
import '../style/footer.css'
import { TiSocialYoutubeCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialGithubCircular } from "react-icons/ti";
import { FaHackerrank } from "react-icons/fa";
export default function Footer() {
    const icon = [
        {
            url: "https://www.hackerrank.com/profile/sachintiwari_751",
            icon: FaHackerrank,
        },
        {
            url: "https://www.linkedin.com/in/sachin-tiwari-javafullstack",
            icon: TiSocialLinkedinCircular,
        },
        {
            url: "https://www.instagram.com/sanatani.jarvishightech.up66",
            icon: TiSocialInstagramCircular,
        },
        {
            url: "https://github.com/Sachint122",
            icon: TiSocialGithubCircular,
        },
        {
            url: "",// i have do not professional youtube account.
            icon: TiSocialYoutubeCircular,
        },
    ];
    return (
        <footer className="footer">
            <div className="social-links">
                {icon.map((item, index) => (
                    item?.url && (  
                        <a href={item.url} key={index}>
                            <item.icon size={60} color='#ffc400' />
                        </a>
                    )
                ))}
            </div>
            <p>&copy; 2024 Jarvis High Tech. All Rights Reserved.</p>
        </footer >
    )
}
