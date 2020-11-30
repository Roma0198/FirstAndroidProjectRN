import React, {useState, Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    } from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import {FilmsDateScreen} from '../../containers/FilmsDateScreen';




LocaleConfig.locales['ua'] = {
    monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    monthNamesShort: ['Січ.','Лют.','Бер.','Кв.','Тр.','Черв.','Лип.','Серп.','Вер.','Жовт.','Лист.','Гр.'],
    dayNames: [ 'Неділя', 'Понеділок','Вівторок','Середа','Четвер','П’ятниця','Субота'],
    dayNamesShort: ['Нд.', 'Пн.','Вт.','Ср.','Чт.','Пт.','Сб.'],
    today: 'Сьогодні'
};
LocaleConfig.defaultLocale = 'ua';


export const Kalendar = (props) => {
    const [selected, setSelected] = useState('');

    const onDayPress = (day) => {
        setSelected(day.dateString);
        props.navigation.navigate('FilmDateScreen', {day:day.dateString});

    }
    return (

            <Calendar
              onDayPress={onDayPress}
              monthFormat={'MMM yyyy'}
              onMonthChange={(month) => {console.log('month changed', month)}}
              firstDay={1}
              showWeekNumbers={false}
              markedDates={{
              [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedColor: 'orange',
                      selectedTextColor: 'red',
                      },
              }}

                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 350,
                    zIndex: 20
                }}
                    theme={{
                    backgroundColor: 'red',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#004fa9',
                    textSectionTitleDisabledColor: '#f60606',
                    selectedDayBackgroundColor: '#0045f5',
                    selectedDayTextColor: '#f80000',
                    todayTextColor: 'orange',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#f50707',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: '#ff0000',
                    indicatorColor: '#ff0000',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 14,
                    textMonthFontSize: 14,
                    textDayHeaderFontSize: 10,
                    selectedColor: 'blue'
                }}

            />

    )
}




