import React from 'react'
import './ListBarForm.scss'
import {FormInput} from "../form-input/FormInput";

export const ListBarForm = () => {
    return (

        <div className="item-form">
            <div className="form-header">
                Add a new Item
            </div>
            <div className="item-form-container">
                <form>
                    <FormInput label="Name" placeholder="Enter a name" isNote={false} />
                    <FormInput label="Note" placeholder="Enter a note" isNote={true} />
                    <FormInput label="Image" placeholder="Enter a URL" isNote={false} />
                    <FormInput label="Category" placeholder="Select a category" isNote={false} />
                </form>
            </div>
            <div className="button-container">
                <div className="cancel-button">
                    cancel
                </div>
                <div className="save-button">
                    Save
                </div>
            </div>

        </div>
    )
}
