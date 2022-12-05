labs = ["rtcDate","rtcTime","Q6_1","Q6_2","Q6_3",
        "RawAX","RawAY","RawAZ","RawGX","RawGY","RawGZ","RawMX","RawMY",'RawMZ',
        "gps_Lat","gps_Long","gps_Alt",'gps_GroundSpeed','gps_Heading',
        'degC','pressure_hPa','pressure_Pa','altitude_m','output_Hz','count']

#sensitive to file location
#reads a certain in file
def read_file(flight_file,location):
    try:
        #f = open(f'/static/recorded_flights/{flight_file}')
        f = open(f'C:\\Users\\keith\\Desktop\\CSCE A470\\Team_Rocket_Visualization\\static\\recorded_flights\\{flight_file}')
        iter = 0
        while(iter< location ):
            f.readline() #skip a line of data
            iter += 1
        data = f.readline()
        f.readline() #hidden /r/n string at the end of every line
        f.close()

        diction = make_variable_dict(data_seperator(data),labs)

        return diction
    except Exception as e:
        print(e)
        #print(os.getcwd())
        return None

#pretties data line to usable data
def data_seperator(raw_data):

    if raw_data != None or raw_data != "":
        if raw_data.find("<") != -1 and raw_data.find(">") != -1:
            #pretty data
            new_data = raw_data
            new_data = new_data.replace("Received packet: ", "")
            new_data = new_data.replace("<", "")
            new_data = new_data.replace(">\n", "")
            new_data = new_data.split(",")
            return new_data
        pass
    pass


#make data into a dictionary with given data
def make_variable_dict(data, labels):

    new_dict={}
    for i in range(len(labels)):
        new_dict[labels[i]] = data[i]
    return new_dict

#read_file("flight0.txt",0)
#read_file("flight0.txt",0)


import os
#sensitive to file location
def list_flights():
    static_folder = "../static/recorded_flights"
    return os.listdir(static_folder)

