import React, {Component } from 'react';

import {
    StyleSheet,
    ScrollView,
    FlatList,
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import {setNumberOfItems, getFilms} from '../redux/app/action';

import {Header} from '../components/Header';
import images from '../themes/images';
import localization from 'moment/locale/uk'



class FilmsDateScreen extends Component {
      constructor() {
          super();
          this.state={
              show:false,
              modalImage: null,
             // numberOfItems: 2,
              };
     }

    pressShowMore() {
        this.setState({showMore: true})
    }

    componentDidMount() {
        this.props.dispatch(getFilms(this.props.route.params.day));
        console.log(this.props.route.params.day)
    }

    openFilmPoster = (item) => {
        this.setState({show:true, modalImage:item.show.image ? { uri: item.show.image.original} : images.poster})

    }
    renderListHeader = () => {
    return (
        <View style={styles.filmData}>
            <Text style={styles.textData}>
                {moment(this.props.route.params.day).format('D MMMM YYYY')}
            </Text>

        </View>
    )}
    renderListFooter = () => {
    return (
        <View style={styles.listFilm}>
        <TouchableOpacity style={styles.buttonMore} onPress={()=> {this.props.app.numberOfItems===2 ? this.props.dispatch(setNumberOfItems(this.props.app.films.length)): this.props.dispatch(setNumberOfItems(2))}}>
            <Text style={styles.buttonMoreText}>
                {this.props.app.numberOfItems===2 ? `Еще ${this.props.app.films.length-2} сериала ᐯ` : `Показать основные ᐱ`}

            </Text>
        </TouchableOpacity>
        </View>
        )
    }

    renderItem = ({item}) => {
      return (

        <View style={styles.contentbox}>

            <TouchableOpacity style={styles.filmImageTO} onPress={() => this.openFilmPoster(item)}>
                <Image resizeMode="contain" source={item.show.image ? { uri: item.show.image.medium} : images.poster}  style={styles.filmImage}/>
            </TouchableOpacity>


            <View style={styles.filmDetals}>
                <Text style={styles.filmName}>
                    {item.name}
                </Text>
                <Text style={styles.filmYear}>
                    2013
                </Text>
                <View style={styles.filmSeasonEp}>
                    <Text style={styles.filmSeasonEpText}>Сезон 3 Епізод 4</Text>
                </View>

            </View>

        </View>

      )
    }


    render () {

      return (

        <View style={styles.mainView}>
            <View style={styles.vievHeader}>
                <Header navigation={this.props.navigation} backButton={true}>
                </Header>
            </View>

            <FlatList
                data={this.props.app.films.slice(0,this.props.app.numberOfItems)}
                renderItem={this.renderItem}
                keyExtractor={(film, index) => film.id}
                ListFooterComponent={this.renderListFooter()}
                ListHeaderComponent={this.renderListHeader()}
            />

           {/* <View style={styles.listFilm}>
                    {this.props.app.films.slice(0,this.props.app.numberOfItems).map(film =>
                <View style={styles.contentbox}>

                    <TouchableOpacity style={styles.filmImageTO} onPress={() => {this.setState({show:true, modalImage:film.show.image ? { uri: film.show.image.original} : images.poster})}}>
                     <Image resizeMode="contain" source={film.show.image ? { uri: film.show.image.medium} : images.poster}  style={styles.filmImage}/>
                    </TouchableOpacity>


                    <View style={styles.filmDetals}>
                    <Text style={styles.filmName}>
                        {film.name}
                    </Text>
                    <Text style={styles.filmYear}>
                        2013
                    </Text>
                    <View style={styles.filmSeasonEp}>
                        <Text style={styles.filmSeasonEpText}>Сезон 3 Епізод 4</Text>
                    </View>

                </View>

                </View>
                )}

            </View>*/}

            <Modal visible={this.state.show} transparent={true} animationType='fade'>
                <TouchableOpacity style={styles.modalView} onPress={() => {this.setState({show:false})}}>
                    <Image resizeMode="contain" source={this.state.modalImage}  style={styles.filmImageModal}/>
                </TouchableOpacity>
            </Modal>
                </View>

      );
    }
}


const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: "100%",
        backgroundColor: '#FFFF',
        alignItems: 'center',


    },
    vievHeader: {
        width: "100%",
        height: 75,
        paddingTop: 1,
    },

    filmData: {
        width: "100%",
        height: 60,
        borderTopWidth: 2,
        borderTopColor: '#DCDCDC',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textData: {
        fontSize: 20,
    },
    listFilm: {
        alignItems: 'center',
    },
    contentbox : {
        height: 150,
        marginHorizontal: 20,
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    filmImage : {
        height: 150,
        width: '100%',
    },
    filmImageTO:{
        height: 150,
        width: '35%',
        marginRight: '5%'
    },
    filmImageModal:  {
    height: 400,
    width: '75%',
    bottom: 75,
    },

    filmDetals: {
        height: 150,
        width: '60%',
    },
    filmName: {
        fontSize: 20,
    },


    filmYear: {
        fontSize: 18,

    },
    filmSeasonEp: {
        width: '90%',
        height: 40,
        backgroundColor: '#e3e3e3',
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },

    filmSeasonEpText: {
        fontSize: 18,


    },
    modalView: {
        top:75,
        backgroundColor: '#000000aa',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',


    },
    buttonMore: {

        height: 60,
        width: '90%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#e3e3e3',
        borderRadius: 10,
        marginBottom: 12,
    },
    buttonMoreText: {
        fontSize: 16,
        color: '#646464',
    }
});


const mapStateToProps = store => ({
    app: store.app,

});

export default connect (mapStateToProps)(FilmsDateScreen);
