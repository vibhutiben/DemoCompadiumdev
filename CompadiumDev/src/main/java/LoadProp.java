import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp {
    static Properties prop;
    static FileInputStream input;
    static String fileName = "";
    static String fileLocation = "";

    public String getProperty(String key) {
        try {
            prop = new Properties();
            input = new FileInputStream(fileLocation + fileName);
            prop.load(input);
            input.close();}
            catch(IOException e){e.printStackTrace();}
            return prop.getProperty (key);
        }

    }


