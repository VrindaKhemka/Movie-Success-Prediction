'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  const [prediction, setPrediction] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // This is where you would typically call your prediction API
    setPrediction("This movie has a 75% chance of success!")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white relative overflow-hidden">
      {/* Dotted background */}
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-800"
            style={{
              width: '4px',
              height: '4px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.25,
            }}
          />
        ))}
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Netflix</h1>
          <h2 className="text-2xl font-semibold">Movie Success Predictor</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
          <div className="space-y-2">
            <Label htmlFor="movieName">Movie Name</Label>
            <Input id="movieName" placeholder="Enter movie name" required className="bg-gray-800 border-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="director">Director</Label>
            <Input id="director" placeholder="Enter director's name" required className="bg-gray-800 border-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="actor">Lead Actor</Label>
            <Input id="actor" placeholder="Enter lead actor's name" required className="bg-gray-800 border-gray-700 text-white" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="genre">Genre</Label>
            <Select required>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Select a genre" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700 text-white">
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
                <SelectItem value="drama">Drama</SelectItem>
                <SelectItem value="scifi">Sci-Fi</SelectItem>
                <SelectItem value="horror">Horror</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
            Predict Success
          </Button>
        </form>
        {prediction && (
          <div className="mt-6 p-4 bg-gray-900 bg-opacity-80 rounded-md text-center">
            <h3 className="text-xl font-semibold mb-2">Prediction Result</h3>
            <p>{prediction}</p>
          </div>
        )}
      </div>
    </main>
  )
}