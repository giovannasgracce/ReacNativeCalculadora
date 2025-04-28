import { AppRegistry } from "react-native";
import {View,Text, StyleSheet,TextInput,TouchableOpacity} from "react-native";
import {useState} from "react";


export default function App(){
    /*Função*/
    const [primeiroNumero ,setPrimeiroNumero] = useState(0); 
    const [segundoNumero ,setSegundoNumero] = useState(0);/*valor inicial da constante é oq esta dentro do parenteses*/ 
    const [resultado ,setResultado] = useState(0);/*altera o estado de algo,da constante ou da variavwel*/ 
   
   /*dentro do return,olhamos tudo*/
    return(
      
        <View style={styles.tela}>
            <Text style={styles.tituloPrograma}>Calculadora</Text>

            <View style={styles.primeiroCampo}>
                <TextInput style={styles.input}  placeholder="Informe um número:"/>
            </View>

            <View style={styles.SegundoCampo}>
                <TextInput style={styles.input} placeholder="Informe outro número:"/>
            </View>

            <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.input}>Somar</Text>
                </TouchableOpacity>
           
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.input}>Subtrair</Text>
                </TouchableOpacity>
            </View>
 
            <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.input}>Multiplicar</Text>
                </TouchableOpacity>
       
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.input}>Dividir</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaBotoes}>
            <TouchableOpacity style={styles.botao}>
                    <Text style={styles.input}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaResultado}>
                <Text style={styles.textoResultado}>{resultado}</Text> {/*Para mostrar o resultado*/}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: "#eb349b",
        width: "100%",
        height: "100%",
    },

    tituloPrograma:{
        marginTop: 60,
        textAlign: "center",
        fontSize: 50,
        color: "#ff96d2",
        fontWeight: 800,

    },

    primeiroCampo:{
        backgroundColor: "#e0adca",
        marginTop: 80,
        padding:10,
        borderRadius:100,
        margin: 10,
        width: "90%",

    },

    SegundoCampo:{
        backgroundColor: "#e0adca",
        marginTop: 25,
        padding:10,
        borderRadius:100,
        margin: 10,
        width: "90%",
    },

    input:{
       textAlign:"center",
       fontSize: 15,
       color: "#f5f2f4",
    },

    botao:{
        backgroundColor: "#e069ad",
        marginTop: 20,
        padding:20,
        alignItems:"center",
        width: "50%",
        borderRadius:100,
    },

    areaBotoes:{
        display:"flex",
        flexDirection:"row",  
    },

    areaResultados:{
        marginTop: 50,
        borderWidth: 2,
        width: "100%",
        padding: 50,
      
    },  

    textoResultado:{
        color: "#f5f2f4",
        fintSize: 30,
        textAlign: "center",
      
    },

});

    AppRegistry.registerComponent('main',() => App);
