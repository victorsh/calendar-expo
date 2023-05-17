import React, { useState, useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const getMovies = async () => {
    console.log('loading')
    try {
      const response = await fetch('https://reactnative.dev/movies.json')
      const json = await response.json()
      console.log(json)
      setData(json.movies)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  )
}

export default Movies
