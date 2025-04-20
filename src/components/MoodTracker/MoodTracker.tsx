import { useState, useEffect } from 'react';
import './MoodTracker.css';

// Mood types and their corresponding data
interface Mood {
  id: string;
  emoji: string;
  label: string;
  color: string;
}

interface MoodEntry {
  date: string;
  mood: string;
  note?: string;
}

const moods: Mood[] = [
  { id: 'great', emoji: '😄', label: 'Great', color: '#4CAF50' },
  { id: 'good', emoji: '🙂', label: 'Good', color: '#8BC34A' },
  { id: 'okay', emoji: '😐', label: 'Okay', color: '#FFC107' },
  { id: 'bad', emoji: '😔', label: 'Bad', color: '#FF9800' },
  { id: 'awful', emoji: '😢', label: 'Awful', color: '#F44336' },
];

// Functional exercise recommendations based on mood
const getRecommendations = (mood: string) => {
  switch (mood) {
    case 'great':
      return ['Gratitude meditation', 'Energy-building yoga', 'Positive affirmations'];
    case 'good':
      return ['Mindful breathing', 'Body scan meditation', 'Nature sounds'];
    case 'okay':
      return ['Guided meditation', 'Calming music', 'Mindful walking'];
    case 'bad':
      return ['Anxiety relief breathing', 'Sleep stories', 'Stress reduction exercises'];
    case 'awful':
      return ['Deep relaxation', 'Self-compassion meditation', 'Calming visualization'];
    default:
      return ['Daily meditation', 'Sleep melodies', 'Breathing exercises'];
  }
};

const MoodTracker = () => {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodNote, setMoodNote] = useState<string>('');
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([]);
  const [moodCounts, setMoodCounts] = useState<Record<string, number>>({});
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [activeTab, setActiveTab] = useState<'tracker' | 'insights' | 'calendar'>('tracker');

  // Load mood history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('moodHistory');
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory) as MoodEntry[];
      setMoodHistory(parsedHistory);
      
      // Check if there's a mood for today
      const today = new Date().toISOString().split('T')[0];
      const todayEntry = parsedHistory.find(entry => entry.date === today);
      if (todayEntry) {
        setSelectedMood(todayEntry.mood);
        setMoodNote(todayEntry.note || '');
      }
      
      // Calculate mood counts for insights
      calculateMoodCounts(parsedHistory);
    }
  }, []);

  // Calculate the count of each mood type
  const calculateMoodCounts = (history: MoodEntry[]) => {
    const counts: Record<string, number> = {};
    moods.forEach(mood => counts[mood.id] = 0);
    
    history.forEach(entry => {
      if (counts[entry.mood] !== undefined) {
        counts[entry.mood]++;
      }
    });
    
    setMoodCounts(counts);
  };

  // Save mood to history and localStorage
  const saveMood = () => {
    if (!selectedMood) return;
    
    const newEntry: MoodEntry = {
      date: selectedDate,
      mood: selectedMood,
      note: moodNote.trim() || undefined,
    };
    
    // Check if we're updating an existing entry
    const updatedHistory = [...moodHistory];
    const existingEntryIndex = updatedHistory.findIndex(entry => entry.date === selectedDate);
    
    if (existingEntryIndex >= 0) {
      updatedHistory[existingEntryIndex] = newEntry;
    } else {
      updatedHistory.push(newEntry);
    }
    
    setMoodHistory(updatedHistory);
    localStorage.setItem('moodHistory', JSON.stringify(updatedHistory));
    calculateMoodCounts(updatedHistory);
    
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 2000);
  };

  // Get mood entries for the calendar view
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getCalendarData = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const calendarDays = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push({ day: '', mood: null });
    }
    
    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const entry = moodHistory.find(e => e.date === date);
      calendarDays.push({
        day,
        mood: entry ? entry.mood : null,
      });
    }
    
    return calendarDays;
  };

  return (
    <section className="mood-tracker-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mood Tracker</h2>
          <p className="section-subtitle">
            Track your mood to better understand your emotional patterns and get personalized recommendations
          </p>
        </div>

        <div className="mood-tracker-tabs">
          <button
            className={`mood-tracker-tab ${activeTab === 'tracker' ? 'active' : ''}`}
            onClick={() => setActiveTab('tracker')}
          >
            Daily Tracker
          </button>
          <button
            className={`mood-tracker-tab ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            Calendar
          </button>
          <button
            className={`mood-tracker-tab ${activeTab === 'insights' ? 'active' : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            Insights
          </button>
        </div>

        <div className="mood-tracker-content">
          {activeTab === 'tracker' && (
            <div className="mood-tracker-daily">
              <div className="mood-date-selector">
                <label htmlFor="mood-date">Date:</label>
                <input
                  type="date"
                  id="mood-date"
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    const existingEntry = moodHistory.find(entry => entry.date === e.target.value);
                    if (existingEntry) {
                      setSelectedMood(existingEntry.mood);
                      setMoodNote(existingEntry.note || '');
                    } else {
                      setSelectedMood(null);
                      setMoodNote('');
                    }
                  }}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="mood-selector">
                <h3>How are you feeling today?</h3>
                <div className="mood-options">
                  {moods.map((mood) => (
                    <button
                      key={mood.id}
                      className={`mood-option ${selectedMood === mood.id ? 'selected' : ''}`}
                      onClick={() => setSelectedMood(mood.id)}
                      style={{ 
                        '--mood-color': mood.color 
                      } as React.CSSProperties}
                    >
                      <span className="mood-emoji">{mood.emoji}</span>
                      <span className="mood-label">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedMood && (
                <>
                  <div className="mood-note">
                    <label htmlFor="mood-note-input">Notes (optional):</label>
                    <textarea
                      id="mood-note-input"
                      placeholder="What's contributing to your mood today?"
                      value={moodNote}
                      onChange={(e) => setMoodNote(e.target.value)}
                      rows={3}
                    ></textarea>
                  </div>

                  <div className="mood-recommendations">
                    <h3>Recommended for you today</h3>
                    <ul className="recommendations-list">
                      {getRecommendations(selectedMood).map((rec, index) => (
                        <li key={index}>
                          <a href="#" className="recommendation-link">
                            {rec}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="mood-actions">
                <button
                  className="btn btn-primary save-mood-btn"
                  onClick={saveMood}
                  disabled={!selectedMood}
                >
                  Save
                </button>
                {showSavedMessage && (
                  <span className="saved-message">Saved successfully!</span>
                )}
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="mood-calendar">
              <div className="calendar-header">
                <h3>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
              </div>
              <div className="calendar-weekdays">
                <div className="weekday">Sun</div>
                <div className="weekday">Mon</div>
                <div className="weekday">Tue</div>
                <div className="weekday">Wed</div>
                <div className="weekday">Thu</div>
                <div className="weekday">Fri</div>
                <div className="weekday">Sat</div>
              </div>
              <div className="calendar-days">
                {getCalendarData().map((day, index) => (
                  <div key={index} className={`calendar-day ${!day.day ? 'empty' : ''}`}>
                    {day.day && (
                      <>
                        <span className="day-number">{day.day}</span>
                        {day.mood && (
                          <span 
                            className="day-mood" 
                            style={{ backgroundColor: moods.find(m => m.id === day.mood)?.color }}
                          >
                            {moods.find(m => m.id === day.mood)?.emoji}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="calendar-legend">
                {moods.map(mood => (
                  <div key={mood.id} className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: mood.color }}></span>
                    <span className="legend-label">{mood.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="mood-insights">
              <div className="mood-stats">
                <h3>Your Mood Distribution</h3>
                <div className="mood-chart">
                  {moods.map(mood => {
                    const count = moodCounts[mood.id] || 0;
                    const total = Object.values(moodCounts).reduce((sum, curr) => sum + curr, 0);
                    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
                    
                    return (
                      <div key={mood.id} className="chart-bar-container">
                        <div className="chart-label">
                          <span className="chart-emoji">{mood.emoji}</span>
                          <span className="chart-text">{mood.label}</span>
                        </div>
                        <div className="chart-bar-bg">
                          <div 
                            className="chart-bar-fill" 
                            style={{ 
                              width: `${percentage}%`,
                              backgroundColor: mood.color 
                            }}
                          ></div>
                        </div>
                        <div className="chart-value">{percentage}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mood-insights-content">
                <h3>Your Insights</h3>
                <div className="insights-cards">
                  <div className="insight-card">
                    <div className="insight-icon">📊</div>
                    <h4>Tracked Days</h4>
                    <p className="insight-value">{moodHistory.length}</p>
                    <p className="insight-text">Continue tracking to reveal patterns in your emotional well-being</p>
                  </div>
                  
                  <div className="insight-card">
                    <div className="insight-icon">🏆</div>
                    <h4>Most Common Mood</h4>
                    {Object.keys(moodCounts).length > 0 ? (
                      <>
                        <p className="insight-value">📊</p>
                        <p className="insight-text">Track at least 3 days to see your trend</p>
                      </>
                    ) : (
                      <>
                        <p className="insight-value">📝</p>
                        <p className="insight-text">Start tracking to find out</p>
                      </>
                    )}
                  </div>

                  <div className="insight-card">
                    <div className="insight-icon">💪</div>
                    <h4>Trending Towards</h4>
                    {moodHistory.length >= 3 ? (
                      <>
                        <p className="insight-value">
                          {(() => {
                            const recentMoods = [...moodHistory]
                              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                              .slice(0, 3)
                              .map(entry => entry.mood);
                            
                            const moodValues = {
                              great: 5, good: 4, okay: 3, bad: 2, awful: 1
                            };
                            
                            const trend = recentMoods.reduce((sum, mood, i) => {
                              return sum + (moodValues[mood as keyof typeof moodValues] || 0) * (3 - i);
                            }, 0) / 6;
                            
                            if (trend >= 4) return '📈 Better';
                            if (trend <= 2) return '📉 Worse';
                            return '📊 Stable';
                          })()}
                        </p>
                        <p className="insight-text">Based on your recent mood entries</p>
                      </>
                    ) : (
                      <>
                        <p className="insight-value">📝</p>
                        <p className="insight-text">Start tracking to find out</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mood-pattern-analysis">
                <h3>Personalized Recommendations</h3>
                <p>Based on your mood patterns, we recommend these practices:</p>
                
                <div className="recommendations-grid">
                  {moodHistory.length > 0 ? (
                    <>
                      <div className="recommendation-card">
                        <div className="recommendation-icon">🧘‍♀️</div>
                        <h4>Daily Practice</h4>
                        <p>5-minute morning meditation to set a positive tone for your day</p>
                        <a href="#" className="recommendation-link">Start Now</a>
                      </div>
                      
                      <div className="recommendation-card">
                        <div className="recommendation-icon">🌙</div>
                        <h4>Evening Ritual</h4>
                        <p>Sleep Stories to help you wind down and improve sleep quality</p>
                        <a href="#" className="recommendation-link">Listen Now</a>
                      </div>
                      
                      <div className="recommendation-card">
                        <div className="recommendation-icon">🎵</div>
                        <h4>Mood Boosting</h4>
                        <p>Nature soundscapes to promote focus and creative thinking</p>
                        <a href="#" className="recommendation-link">Play Now</a>
                      </div>
                    </>
                  ) : (
                    <div className="empty-state">
                      <p>Start tracking your mood to receive personalized recommendations based on your emotional patterns.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoodTracker;