import React, { useState } from 'react'
import './cardform.css'
import axios from 'axios'

const CardForm = () => {
  const [eventId, setEventId] = useState('')
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('')
  const [dateTime, setDateTime] = useState('')
  const [day, setDay] = useState('')
  const [type, setType] = useState('')
  const [organizerId, setOrganizerId] = useState('')
  const [vipTickets, setVipTickets] = useState('')
  const [regTickets, setRegTickets] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const [deleteStatus, setDeleteStatus] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('eventId', eventId)
    formData.append('title', title)
    formData.append('details', details)
    formData.append('location', location)
    formData.append('city', city)
    formData.append('dateTime', dateTime)
    formData.append('day', day)
    formData.append('type', type)
    formData.append('organizerId', organizerId)
    formData.append('vipTickets', vipTickets)
    formData.append('regTickets', regTickets)
    formData.append('price', price)
    formData.append('image', image)
    formData.append('deleteStatus', deleteStatus)

    try {
      const response = await axios.post('/api/events', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleImageChange = e => {
    setImage(e.target.files[0])
  }

  return (
    <div className='cardform-login'>
      <div className='cardform-form-container'>
        <p className='cardform-title'>Event Form</p>
        <form className='cardform-form' onSubmit={handleSubmit}>
          <div className='cardform-input-group'>
            <label htmlFor='eventId'>Event ID</label>
            <input
              type='number'
              name='eventId'
              id='eventId'
              value={eventId}
              onChange={e => setEventId(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='details'>Details</label>
            <textarea
              name='details'
              id='details'
              value={details}
              onChange={e => setDetails(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              name='location'
              id='location'
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='city'>City</label>
            <select
              name='city'
              id='city'
              value={city}
              onChange={e => setCity(e.target.value)}
            >
              <option value=''>Select city</option>
              <option value='Islamabad'>Islamabad</option>
              <option value='Lahore'>Lahore</option>
              <option value='Karachi'>Karachi</option>
              <option value='Faisalabad'>Faisalabad</option>
              <option value='Rawalpindi'>Rawalpindi</option>
              <option value='Gujranwala'>Gujranwala</option>
              <option value='Peshawar'>Peshawar</option>
              <option value='Multan'>Multan</option>
              <option value='Hyderabad'>Hyderabad</option>
              <option value='Quetta'>Quetta</option>
            </select>
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='dateTime'>Date and Time</label>
            <input
              type='datetime-local'
              name='dateTime'
              id='dateTime'
              value={dateTime}
              onChange={e => setDateTime(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='day'>Day</label>
            <input
              type='text'
              name='day'
              id='day'
              value={day}
              onChange={e => setDay(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='type'>Type</label>
            <input
              type='text'
              name='type'
              id='type'
              value={type}
              onChange={e => setType(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='organizerId'>Organizer ID</label>
            <input
              type='number'
              name='organizerId'
              id='organizerId'
              value={organizerId}
              onChange={e => setOrganizerId(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='vipTickets'>VIP Tickets</label>
            <input
              type='number'
              name='vipTickets'
              id='vipTickets'
              value={vipTickets}
              onChange={e => setVipTickets(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='regTickets'>Regular Tickets</label>
            <input
              type='number'
              name='regTickets'
              id='regTickets'
              value={regTickets}
              onChange={e => setRegTickets(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              name='price'
              id='price'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='image'>Image</label>
            <input
              type='file'
              name='image'
              id='image'
              onChange={handleImageChange}
            />
          </div>
          <div className='cardform-input-group'>
            <label htmlFor='deleteStatus'>Delete Status</label>
            <input
              type='checkbox'
              name='deleteStatus'
              id='deleteStatus'
              checked={deleteStatus}
              onChange={e => setDeleteStatus(e.target.checked)}
            />
          </div>
          <button className='cardform-sign' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CardForm
