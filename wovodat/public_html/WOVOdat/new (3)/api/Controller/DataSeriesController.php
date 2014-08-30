<?php
	class DataSeriesController {

		/**
		*	@return 
		*		volcano list
		*/
		public static function getDataList() {
			$result = DataSeriesRepository::getDataList();
			return $result;
		}	

	}
