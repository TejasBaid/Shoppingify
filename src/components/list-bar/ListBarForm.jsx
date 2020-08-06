import React from 'react'
import './ListBarForm.scss'

export const ListBarForm = () => {
    return (

        <div className="item-form">
            <div className="form-header">
                Add a new Item
            </div>
            <div className="item-form-container">
                <form>
                    <div className="form-input">
                        <label className="item-label" htmlFor="name">Name</label>
                        <div className="form-input-item">
                            <input placeholder="Enter a name" type="text" name="name"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="item-label" htmlFor="name">Note</label>

                        <input placeholder="Enter a note" type="textfield" name="name" className="note"/>

                    </div>
                    <div className="form-input">
                        <label className="item-label" htmlFor="name">Image</label>
                        <div className="form-input-item">
                            <input placeholder="Enter a url" type="text" name="name"/>
                        </div>
                    </div>
                    <div className="form-input">
                        <label className="item-label" htmlFor="name">Category</label>
                        <div className="form-input-item">
                            {/* TODO: implement dropdown */}


                            <input placeholder="Enter a category" type="text" name="name"/>
                        </div>
                    </div>
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
