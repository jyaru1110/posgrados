import { useNavigate } from "react-router-dom"
export default function Header(props) {
    const navigate = useNavigate();

    return (
        <div className="flex mb-2 items-center ml-1">
            <button className="mr-4" onClick= {() => {navigate(-1)}}>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.53739 13.2501C7.7702 13.0159 7.90088 12.6991 7.90088 12.3689C7.90088 12.0386 7.7702 11.7218 7.53739 11.4876L3.11239 7.00012L7.53739 2.57512C7.7702 2.34092 7.90088 2.0241 7.90088 1.69387C7.90088 1.36364 7.7702 1.04682 7.53739 0.812619C7.42118 0.695458 7.28293 0.602465 7.13061 0.539004C6.97829 0.475544 6.8149 0.442871 6.64989 0.442871C6.48487 0.442871 6.32149 0.475544 6.16917 0.539004C6.01684 0.602465 5.87859 0.695458 5.76239 0.812619L0.462389 6.11262C0.345228 6.22882 0.252235 6.36707 0.188775 6.5194C0.125314 6.67172 0.0926406 6.8351 0.0926406 7.00012C0.0926406 7.16513 0.125314 7.32852 0.188775 7.48084C0.252235 7.63316 0.345228 7.77142 0.462389 7.88762L5.76239 13.2501C5.87859 13.3673 6.01684 13.4603 6.16917 13.5237C6.32149 13.5872 6.48487 13.6199 6.64989 13.6199C6.8149 13.6199 6.97829 13.5872 7.13061 13.5237C7.28293 13.4603 7.42118 13.3673 7.53739 13.2501Z" fill="black"/>
            </svg>
            </button>
            <p className="text-xl font-poppins font-semibold">{props.titulo}</p>
        </div>
    )
}