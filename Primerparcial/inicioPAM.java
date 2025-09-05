import javax.swing.JOptionPane;
public class inicioPAM{
    
    public void Reglamentopoo (){
        
    }
    public void Lineamientos(){
        JOptionPane.showMessageDialog(null,"Lineamientos de POO");
    }
    public void Fechasparciales(){
        JOptionPane.showMessageDialog(null, "Fechas de examenes parciales"
        +"\n1.Primer parcial: 30-09-25"
        +"\n2.Segundo parcial: 04-10-25"
        +"\n3.Tercer parcial: 02-12-25"
        +"\nFinal: 08-12-25");
    }
    public void PorcentajesXParcial(){
        JOptionPane.showMessageDialog(null ,"Porcentajes por parcial"
        +"\n1.Primer parcial: Examen 40%, Actividades 20%,Tareas 30%, Proyecto integrador 10%"
        +"\n2.Segundo parcial: Examen 40%, Actividades 20%,Tareas 20%, Proyecto integrador 20%"
        +"\n3.Tercer parcial: Examen 20%, Actividades 10%,Tareas 40%, Proyecto integrador 30%");
    }

    public static void main(String[] args){
       inicioPAM inicio = new inicioPAM(); 
       int op;
              op = Integer.parseInt(JOptionPane.showInputDialog(null ,"Menu de inicio POO"
              +"\n1.Reglamento de POO"
              +"\n2.Lineamientos"
              +"\n3.Fechas de parciales"
              +"\n4.Porcentajes por parcial"
              +"\n5.Salir"));
              switch(op){
                case 1:
                     inicio.Reglamentopoo();
                     break;
                case 2:
                     inicio.Lineamientos();
                     break;
                case 3:
                     inicio.Fechasparciales();
                     break;
                case 4:
                     inicio.PorcentajesXParcial();
                     break;
                case 5:
                     JOptionPane.showMessageDialog(null,"Saliendo del programa");
                     break;
                default:
                     JOptionPane.showMessageDialog(null,"Opcion no valida");
              }
}
}