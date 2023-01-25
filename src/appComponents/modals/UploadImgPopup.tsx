
import React from 'react'

const UploadImgPopup: React.FC = () => {
    return (
        <div className="p-6">
            <div className="w-full px-3 mt-4 first:mt-0">
                <label htmlFor="" className="block text-base font-medium text-gray-700">Logo Name</label>
                <div className="mt-2"><input type="text" placeholder="Logo Name" value="" className="form-input" /></div>
            </div>
            <div className="w-full px-3 mt-4 first:mt-0">
                <label htmlFor="" className="block text-base font-medium text-gray-700">Description</label>
                <div className="mt-2"><textarea className="form-input"></textarea></div>
            </div>
            <div className="w-full px-3 mt-4 first:mt-0">
                <label htmlFor="" className="block text-base font-medium text-gray-700">Image</label>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                    <div className="grow"><input type="file" placeholder="" value="" className="form-input" /></div>
                    <div className=""><button data-modal-toggle="testModal" type="button" className="btn btn-primary">Upload</button></div>
                </div>
                <div className="mt-2 border border-gray-300 p-1 w-28 h-28 flex items-center justify-center"><img className="inline-block max-h-full" src="../images/cg-logo-1.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default UploadImgPopup