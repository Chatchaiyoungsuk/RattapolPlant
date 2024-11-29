import { useForm } from "react-hook-form";
import axios from "axios"
import { Link } from "react-router-dom"

const Register = () => {

    const { register, formState: { errors } , handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios.post("https://script.google.com/macros/s/AKfycbzbhz92DnQgZGeOENm_ZyX9K96JnwG_1j-lczAp8WC72_L4msgVVfY38MBxFTFhiCGq6A/exec",JSON.stringify(data))
        .then(alert("สมัครเรียบร้อย"))
        .catch(err => alert("เกิดข้อผิดพลาด"))
    }

    return(
        <>
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card mx-auto w-full max-w-xl bg-base-200 p-4 m-4">
            <h1 className="text-2xl">สมัครสมาชิก</h1>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">ชื่อ - นามสกุล</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("name", { required: true})} />
            </div>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">อีเมล</span>
                </label>
                <input type="email" placeholder="Type here" className="input input-bordered w-full" {...register("email", { required: true})} />
            </div>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">เบอร์โทร</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("phone", { required: true})} />
            </div>
            <div className="form-control w-full my-2">
                <label className="label">
                    <span className="label-text">รหัสผ่าน</span>
                </label>
                <input type="password" placeholder="Type here" className="input input-bordered w-full" {...register("password", { required: true})} />
            </div>
            <button type="submit" className="btn btn-primary btn-block my-2">สมัครสมาชิก</button>
            <Link to={`/login`} type="submit" className="btn btn-secondary btn-block my-2">มีบัญชีแล้ว</Link>
            </form>
        </div>
        </>
    )

}

export default Register