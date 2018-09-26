import axios from 'axios'
import React, { Component } from 'react'

import Item from './components/item'
import initialState from '../search/initial-state'

class List extends Component {
constructor() {
    super()

    this.state = initialState
  }

   /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  getData(query) {
    const apiUrl = `https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&q=${query}`

    axios.get(apiUrl)
      .then((response) => {
        this.data = this.formatEvents(response.data.records)
        this.setState({
          data: this.formatEvents(response.data.records)
      })
        this.getData(value)
    })
      .catch((error) => {
        console.log(error)
      })
  }
   /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      dateEnd: event.fields.date_end,
      dateStart: event.fields.date_start,
      description: event.fields.description,
      image: event.fields.image,
      title: event.fields.title
    }))
  }

  render() {
    const { list } = this.state

    return (
      <ul>
        {list.map(item => <li key={item.id}>{item.city} || {item.adress} || {item.image} </li>)}
      </ul>
    )
  }
}

export default List
