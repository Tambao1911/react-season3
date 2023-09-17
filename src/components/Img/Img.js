import imgSilver from './ImgBac/maubac.webp';
import imgBlack from './ImgDen/mauden.webp';
import imgPurple from './imgTim/mautim.webp';
import imgYellow from './ImgVang/mauvang.webp';
import arrSilver from './ImgBac/ImgSilver';
import arrBlack from './ImgDen/ImgBlack';
import arrPurple from './imgTim/ImgPurple';
import arrYellow from './ImgVang/ImgYellow';

export const IconStar = ({ classname, height = "1rem", width = "1rem" }) => {
    return (
        <svg
            className={classname}
            height={height}
            width={width}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            size=""
            color=""
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
    );
};


export { arrSilver, arrBlack, arrPurple, arrYellow, imgSilver, imgBlack, imgPurple, imgYellow }

