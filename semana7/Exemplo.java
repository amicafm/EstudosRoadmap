package Exemplo;

import javax.swing.*;
import java.awt.*;

public class Exemplo extends JFrame {
       public Exemplo() {
              setSize(800, 600);
              setTitle ("Exemplo");
              setVisible(true);
            }
            
       public void plot(int x, int y)
       {
            Graphics g = getGraphics();
            g.fillOval(x, y, 1, 1);
       }
       
       
       public void desenhaReta(int x1, int y1, int x2, int y2)
       {
         float b, m;
         float x, y;
         
         //y = m*x + b;
         
         
         m = (float) (y2 - y1) / (x2 - x1);
         
         b = y1 - m * x1;
         
         
         for (x = x1; x <=x2 ; x++)
         {
             y = m * x + b;
             plot ((int) x, (int) y);
          }
       
       }
       
       public void desenhaRetaDDA(int x1, int y1, int x2, int y2, double m)
       {
           float x = x1, y = y1;
           
            if(m >= 1) {
            	for(x = x1; x <= x2; x++) {
            		y += m;
            		plot ((int) x, (int) y);
            	}
            	for(y = y1; y <= y2; y++) {
            		x += 1 / m;
            		plot ((int) x, (int) y);
            	}
            }
       }
       
       public void desenhaCirculoPadrao(int r)
       {
    	   float y, x;
    	   for(x = 0; x <= r; x++) {
    		   y = (int)Math.sqrt(r * r - x * x);
    		   plot ((int)x, (int)y);
    		
    	   }
       }
       
       public void desenhaCirculoSenCos(int r)
       {
    	   float y, x;
    	   for(double angulo = 0; angulo <= 90; angulo=angulo+0.1) {
    		   x = (float)(r * Math.sin(Math.toRadians(angulo)));
    		   y = (float)(r * Math.cos(Math.toRadians(angulo)));
    		   plot ((int)x, (int)y);
    	   }
       }
       
       public void desenhaQuadrado(int x1, int y1, int x2, int y2) {
    	   int x, y;
    	   
    	   Graphics g = getGraphics();
    	   
    	   for(x=x1; x<= x2; x++) {
    		   g.drawLine(x, y1, x, y1);
    		   g.drawLine(x, y2, x, y2);
    	   }
    	   
    	   for(y=y1; y<= y2; y++) {
    		   g.drawLine(x1, y, x1, y);
    		   g.drawLine(x2, y, x2, y);
    	   }
       }
      
       public static void main(String args[])
       {
             Exemplo p = new Exemplo();
             p.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
             
             //tempinho
             try {
                   Thread.sleep(100);
                 } catch (Exception e) {};
             p.desenhaReta(50, 50, 100, 100);
             p.desenhaRetaDDA(200, 200, 600, 600, 1);
             p.desenhaCirculoPadrao(100);
             p.desenhaCirculoSenCos(500);
               p.desenhaQuadrado(600, 600, 2, 2);
       }
}