import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import CountryFlag from './CountryFlag';

const countries = [
  {
    code: 'US',
    name: 'United States',
    flag: '/flags/us.svg'
  },
  {
    code: 'FR',
    name: 'France',
    flag: '/flags/fr.svg'
  }
];

const languages = [
  { code: 'ar', name: 'Arabic - العربية' },
  { code: 'zh-CN', name: 'Chinese (Simplified) - 中文 (简体)' },
  { code: 'zh-TW', name: 'Chinese (Traditional) - 中文 (繁體)' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French - Français' },
  { code: 'de', name: 'German - Deutsch' },
  { code: 'hi', name: 'Hindi - हिन्दी' },
  { code: 'it', name: 'Italian - Italiano' },
  { code: 'ja', name: 'Japanese - 日本語' },
  { code: 'ko', name: 'Korean - 한국어' },
  { code: 'pt', name: 'Portuguese - Português' },
  { code: 'ru', name: 'Russian - Русский' },
  { code: 'es', name: 'Spanish - Español' },
];

const GeneralSettings: React.FC = () => {
  const [languageSearch, setLanguageSearch] = useState('');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages.find(l => l.code === 'en'));
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [timeFormat, setTimeFormat] = useState('12');

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(languageSearch.toLowerCase())
  );

  return (
    <div className="space-y-8 pt-4">
      <div className="grid grid-cols-[200px,1fr] gap-x-8 gap-y-8 items-center">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Country/Region
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
            className="relative w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          >
            <div className="flex items-center">
              <CountryFlag code={selectedCountry.code} className="w-5 h-5 mr-2" />
              <span className="block truncate text-gray-900 dark:text-gray-300">{selectedCountry.name}</span>
              <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </button>

          {isCountryDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <ul className="max-h-60 overflow-auto py-1">
                {countries.map((country) => (
                  <li
                    key={country.code}
                    className={cn(
                      'px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-900 dark:text-gray-300 flex items-center',
                      selectedCountry?.code === country.code && 'bg-gray-100 dark:bg-gray-800'
                    )}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsCountryDropdownOpen(false);
                    }}
                  >
                    <CountryFlag code={country.code} className="w-5 h-5 mr-2" />
                    {country.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Language
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="relative w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
          >
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <span className="block truncate text-gray-900 dark:text-gray-300">{selectedLanguage?.name || 'Select language'}</span>
            <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
          </button>

          {isLanguageDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-1.5 pl-10 pr-3 text-sm text-gray-900 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Search languages..."
                    value={languageSearch}
                    onChange={(e) => setLanguageSearch(e.target.value)}
                  />
                </div>
              </div>
              <ul className="max-h-60 overflow-auto py-1">
                {filteredLanguages.map((language) => (
                  <li
                    key={language.code}
                    className={cn(
                      'px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-gray-900 dark:text-gray-300',
                      selectedLanguage?.code === language.code && 'bg-gray-100 dark:bg-gray-800'
                    )}
                    onClick={() => {
                      setSelectedLanguage(language);
                      setIsLanguageDropdownOpen(false);
                      setLanguageSearch('');
                    }}
                  >
                    {language.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Time Format
        </label>
        <div className="flex items-center pl-3 space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="timeFormat"
              value="12"
              checked={timeFormat === '12'}
              onChange={(e) => setTimeFormat(e.target.value)}
              className="form-radio h-4 w-4 text-primary-600 border-gray-300 dark:border-gray-600 focus:ring-primary-500 dark:focus:ring-primary-600"
            />
            <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">12 hours</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="timeFormat"
              value="24"
              checked={timeFormat === '24'}
              onChange={(e) => setTimeFormat(e.target.value)}
              className="form-radio h-4 w-4 text-primary-600 border-gray-300 dark:border-gray-600 focus:ring-primary-500 dark:focus:ring-primary-600"
            />
            <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">24 hours</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;