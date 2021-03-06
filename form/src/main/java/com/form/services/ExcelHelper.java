package com.form.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.form.entities.User;

public class ExcelHelper {
	public static String TYPE = "application/vnd.openxmlformats-officedocuments.spreadsheetml.sheet";
	static String[] HEADERs= {"Id","First Name","Last Name","Password","Email","Birth Date","Address Line 1","Address Line 2","City","State","Country","Postal Code","Phone","Gender","Profile Image","Created Time Stamp"};
	static String SHEET = "Users";
	public static ByteArrayInputStream usersToExcel(List<User> users) {
		try (Workbook workbook = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream();) {
		      Sheet sheet = workbook.createSheet(SHEET);
		      // Header
		      Row headerRow = sheet.createRow(0);
		      for (int col = 0; col < HEADERs.length; col++) {
		        Cell cell = headerRow.createCell(col);
		        cell.setCellValue(HEADERs[col]);
		      }
		      int rowIdx = 1;
		      for (User user : users) {
		    	  if(user.isFf()) {
		        Row row = sheet.createRow(rowIdx++);
		        row.createCell(0).setCellValue(user.getId());
		        row.createCell(1).setCellValue(user.getFirstName());
		        row.createCell(2).setCellValue(user.getLastName());
		        row.createCell(3).setCellValue("********");
		        row.createCell(4).setCellValue(user.getEmail());
		        row.createCell(5).setCellValue(user.getBirthDate());
		        row.createCell(6).setCellValue(user.getAddressLine1());
		        row.createCell(7).setCellValue(user.getAddressLine2());
		        row.createCell(8).setCellValue(user.getCity());
		        row.createCell(9).setCellValue(user.getState());
		        row.createCell(10).setCellValue(user.getCountry());
		        row.createCell(11).setCellValue(user.getPostalCode());
		        row.createCell(12).setCellValue(user.getPhone());
		        row.createCell(13).setCellValue(user.getGender());
		        row.createCell(14).setCellValue(user.getProfileImage());
		        row.createCell(15).setCellValue(user.getCreatedTimestamp());
		    	  }
		      }
		      workbook.write(out);
		      return new ByteArrayInputStream(out.toByteArray());
		} catch (IOException e) {
		      throw new RuntimeException("fail to import data to Excel file: " + e.getMessage());
		}
	}	
}
