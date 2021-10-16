import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default function App() {
  return (
    /* header */
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#f5427b',
            height: 150,
            borderRadius: 10,
            padding: 20,
            margin: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Icon name="chevron-small-left" size={30} color="#fff" />
              <Icon name="wallet" size={20} color="#fff" />
              <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5}}>
                N-Pay
              </Text>
            </View>
            <Icon name="dots-three-horizontal" size={30} color="#fff" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                borderRadius: 100,
                overflow: 'hidden',
              }}>
              <Image
                source={require('./man.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 15,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Nanang Hikmawan
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginLeft: 15,
                  color: 'white',
                }}>
                Tap to see your profile
              </Text>
            </View>
          </View>
        </View>
        {/* item tengah */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="arrowup" size={20} color="#f5427b" />
              </View>
            </View>
            <Text>Pay</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="plus" size={20} color="#f5427b" />
              </View>
            </View>
            <Text>Top Up</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="arrowdown" size={20} color="#f5427b" />
              </View>
            </View>
            <Text>Request</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 25,
                  height: 25,
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="paypal" size={20} color="#f5427b" />
              </View>
            </View>
            <Text>PayLater</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome5 name="hand-holding-usd" size={23} color="#fff" />
              </View>
            </View>
            <Text>Cash Out</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="user-plus" size={23} color="#fff" />
              </View>
            </View>
            <Text>Plus</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#f5427b',
                width: 60,
                height: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="calendar-plus-o" size={23} color="#fff" />
              </View>
            </View>
            <Text>GoTagihan</Text>
          </View>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}></View>
        </View>
        {/* item gofriend< */}
        <View>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              margin: 10,
              padding: 10,
              borderWidth: 1.5,
              borderColor: 'black',
              height: 200,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
                  N-Pay Friends
                </Text>
                <Text style={{fontWeight: '500', fontSize: 12, color: 'black'}}>
                  These are who you last sent or requested N-Pay to.
                </Text>
                <Text style={{fontWeight: '500', fontSize: 12, color: 'black'}}>
                  Tap their name to send again.
                </Text>
              </View>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 12, color: 'seagreen'}}>
                  See more
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                source={require('./boy.png')}
                style={{width: 70, height: 70, marginRight: 10}}></Image>
              <Image
                source={require('./business-man.png')}
                style={{width: 70, height: 70, marginRight: 10}}></Image>
              <Image
                source={require('./designer.png')}
                style={{width: 70, height: 70, marginRight: 10}}></Image>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'seagreen',
                }}>
                Jhon
              </Text>
              <Text
                style={{
                  marginHorizontal: 34,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'seagreen',
                }}>
                Jason
              </Text>
              <Text
                style={{
                  marginHorizontal: 10,
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'seagreen',
                }}>
                Rin
              </Text>
            </View>
          </View>
        </View>
        {/* history */}
        <View>
          <View
            style={{
              margin: 10,
              padding: 10,
              borderWidth: 1.5,
              borderColor: 'transparent',
              borderBottomColor: '#d7d2ce',
              height: 100,
            }}>
            <Text
              style={{
                color: 'black',
                fontWeight: '500',
                marginBottom: 5,
                fontSize: 18,
              }}>
              History
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  N-Pay Top Up
                </Text>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  #28646345098942
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 15}}>
                  Rp
                </Text>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 25}}>
                  110.000
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              padding: 10,
              borderWidth: 1.5,
              borderColor: 'transparent',
              borderBottomColor: '#d7d2ce',
              height: 70,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  N-Pay Top Up
                </Text>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  #43874699811277
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 15}}>
                  Rp
                </Text>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 25}}>
                  51.000
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              padding: 10,
              borderWidth: 1.5,
              borderColor: 'transparent',
              borderBottomColor: '#d7d2ce',
              height: 70,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  N-Pay Top Up
                </Text>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  #66772245987881
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 15}}>
                  Rp
                </Text>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 25}}>
                  21.000
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              padding: 10,
              borderWidth: 1.5,
              borderColor: 'transparent',
              borderBottomColor: '#d7d2ce',
              height: 70,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  N-Pay Top Up
                </Text>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  #51878911332450
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 15}}>
                  Rp
                </Text>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 25}}>
                  11.000
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              padding: 10,
              borderWidth: 1.5,
              borderColor: 'transparent',
              borderBottomColor: '#d7d2ce',
              height: 70,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  N-Pay Top Up
                </Text>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
                  #11112688935664
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 15}}>
                  Rp
                </Text>
                <Text
                  style={{color: 'seagreen', fontWeight: 'bold', fontSize: 25}}>
                  6.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <View
          style={{
            backgroundColor: 'transparent',
            height: 60,
            margin: 0,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 5,
              margin: 5,
            }}>
            <View>
              <Icon name="home" size={22} color="seagreen" />
              <View>
                <Text style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                  Home
                </Text>
              </View>
            </View>
            <View>
              <Feather name="activity" size={22} color="seagreen" />
              <View>
                <Text style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                  Activity
                </Text>
              </View>
            </View>
            <View>
              <Icon name="chat" size={22} color="seagreen" />
              <View>
                <Text style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                  Chat
                </Text>
              </View>
            </View>
            <View>
              <EvilIcons name="user" size={30} color="seagreen" />
              <View>
                <Text style={{fontSize: 9, fontWeight: '600', color: 'black'}}>
                  Profile
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
